# `azurerm_api_management_backend`

Refer to the Terraform Registory for docs: [`azurerm_api_management_backend`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend).

# `apiManagementBackend` Submodule <a name="`apiManagementBackend` Submodule" id="@cdktf/provider-azurerm.apiManagementBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementBackend <a name="ApiManagementBackend" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend azurerm_api_management_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackend;

ApiManagementBackend.Builder.create(Construct scope, java.lang.String id)
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
    .apiManagementName(java.lang.String)
    .name(java.lang.String)
    .protocol(java.lang.String)
    .resourceGroupName(java.lang.String)
    .url(java.lang.String)
//  .credentials(ApiManagementBackendCredentials)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .proxy(ApiManagementBackendProxy)
//  .resourceId(java.lang.String)
//  .serviceFabricCluster(ApiManagementBackendServiceFabricCluster)
//  .timeouts(ApiManagementBackendTimeouts)
//  .title(java.lang.String)
//  .tls(ApiManagementBackendTls)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#url ApiManagementBackend#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#description ApiManagementBackend#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#id ApiManagementBackend#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.serviceFabricCluster">serviceFabricCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | service_fabric_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#title ApiManagementBackend#title}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | tls block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.apiManagementName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#url ApiManagementBackend#url}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#credentials ApiManagementBackend#credentials}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#description ApiManagementBackend#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#id ApiManagementBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.proxy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#proxy ApiManagementBackend#proxy}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}.

---

##### `serviceFabricCluster`<sup>Optional</sup> <a name="serviceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.serviceFabricCluster"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

service_fabric_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#service_fabric_cluster ApiManagementBackend#service_fabric_cluster}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#timeouts ApiManagementBackend#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#title ApiManagementBackend#title}.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.Initializer.parameter.tls"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#tls ApiManagementBackend#tls}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy">putProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster">putServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetProxy">resetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetServiceFabricCluster">resetServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTls">resetTls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials"></a>

```java
public void putCredentials(ApiManagementBackendCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---

##### `putProxy` <a name="putProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy"></a>

```java
public void putProxy(ApiManagementBackendProxy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---

##### `putServiceFabricCluster` <a name="putServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster"></a>

```java
public void putServiceFabricCluster(ApiManagementBackendServiceFabricCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putServiceFabricCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts"></a>

```java
public void putTimeouts(ApiManagementBackendTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls"></a>

```java
public void putTls(ApiManagementBackendTls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetId"></a>

```java
public void resetId()
```

##### `resetProxy` <a name="resetProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetProxy"></a>

```java
public void resetProxy()
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetResourceId"></a>

```java
public void resetResourceId()
```

##### `resetServiceFabricCluster` <a name="resetServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetServiceFabricCluster"></a>

```java
public void resetServiceFabricCluster()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.resetTls"></a>

```java
public void resetTls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackend;

ApiManagementBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackend;

ApiManagementBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackend;

ApiManagementBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference">ApiManagementBackendCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference">ApiManagementBackendProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricCluster">serviceFabricCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference">ApiManagementBackendServiceFabricClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference">ApiManagementBackendTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference">ApiManagementBackendTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxyInput">proxyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricClusterInput">serviceFabricClusterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentials"></a>

```java
public ApiManagementBackendCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference">ApiManagementBackendCredentialsOutputReference</a>

---

##### `proxy`<sup>Required</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxy"></a>

```java
public ApiManagementBackendProxyOutputReference getProxy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference">ApiManagementBackendProxyOutputReference</a>

---

##### `serviceFabricCluster`<sup>Required</sup> <a name="serviceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricCluster"></a>

```java
public ApiManagementBackendServiceFabricClusterOutputReference getServiceFabricCluster();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference">ApiManagementBackendServiceFabricClusterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeouts"></a>

```java
public ApiManagementBackendTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference">ApiManagementBackendTimeoutsOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tls"></a>

```java
public ApiManagementBackendTlsOutputReference getTls();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference">ApiManagementBackendTlsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementNameInput"></a>

```java
public java.lang.String getApiManagementNameInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.credentialsInput"></a>

```java
public ApiManagementBackendCredentials getCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `proxyInput`<sup>Optional</sup> <a name="proxyInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.proxyInput"></a>

```java
public ApiManagementBackendProxy getProxyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `serviceFabricClusterInput`<sup>Optional</sup> <a name="serviceFabricClusterInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.serviceFabricClusterInput"></a>

```java
public ApiManagementBackendServiceFabricCluster getServiceFabricClusterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tlsInput"></a>

```java
public ApiManagementBackendTls getTlsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementBackendConfig <a name="ApiManagementBackendConfig" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendConfig;

ApiManagementBackendConfig.builder()
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
    .apiManagementName(java.lang.String)
    .name(java.lang.String)
    .protocol(java.lang.String)
    .resourceGroupName(java.lang.String)
    .url(java.lang.String)
//  .credentials(ApiManagementBackendCredentials)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .proxy(ApiManagementBackendProxy)
//  .resourceId(java.lang.String)
//  .serviceFabricCluster(ApiManagementBackendServiceFabricCluster)
//  .timeouts(ApiManagementBackendTimeouts)
//  .title(java.lang.String)
//  .tls(ApiManagementBackendTls)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.apiManagementName">apiManagementName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#url ApiManagementBackend#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#description ApiManagementBackend#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#id ApiManagementBackend#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.proxy">proxy</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.serviceFabricCluster">serviceFabricCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | service_fabric_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#title ApiManagementBackend#title}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | tls block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.apiManagementName"></a>

```java
public java.lang.String getApiManagementName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#api_management_name ApiManagementBackend#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#protocol ApiManagementBackend#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_group_name ApiManagementBackend#resource_group_name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#url ApiManagementBackend#url}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.credentials"></a>

```java
public ApiManagementBackendCredentials getCredentials();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#credentials ApiManagementBackend#credentials}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#description ApiManagementBackend#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#id ApiManagementBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.proxy"></a>

```java
public ApiManagementBackendProxy getProxy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#proxy ApiManagementBackend#proxy}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#resource_id ApiManagementBackend#resource_id}.

---

##### `serviceFabricCluster`<sup>Optional</sup> <a name="serviceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.serviceFabricCluster"></a>

```java
public ApiManagementBackendServiceFabricCluster getServiceFabricCluster();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

service_fabric_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#service_fabric_cluster ApiManagementBackend#service_fabric_cluster}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.timeouts"></a>

```java
public ApiManagementBackendTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#timeouts ApiManagementBackend#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#title ApiManagementBackend#title}.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendConfig.property.tls"></a>

```java
public ApiManagementBackendTls getTls();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#tls ApiManagementBackend#tls}

---

### ApiManagementBackendCredentials <a name="ApiManagementBackendCredentials" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendCredentials;

ApiManagementBackendCredentials.builder()
//  .authorization(ApiManagementBackendCredentialsAuthorization)
//  .certificate(java.util.List<java.lang.String>)
//  .header(java.util.Map<java.lang.String, java.lang.String>)
//  .query(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.certificate">certificate</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#certificate ApiManagementBackend#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.header">header</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#header ApiManagementBackend#header}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.query">query</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#query ApiManagementBackend#query}. |

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.authorization"></a>

```java
public ApiManagementBackendCredentialsAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#authorization ApiManagementBackend#authorization}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.certificate"></a>

```java
public java.util.List<java.lang.String> getCertificate();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#certificate ApiManagementBackend#certificate}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.header"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeader();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#header ApiManagementBackend#header}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials.property.query"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQuery();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#query ApiManagementBackend#query}.

---

### ApiManagementBackendCredentialsAuthorization <a name="ApiManagementBackendCredentialsAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendCredentialsAuthorization;

ApiManagementBackendCredentialsAuthorization.builder()
//  .parameter(java.lang.String)
//  .scheme(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.parameter">parameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#parameter ApiManagementBackend#parameter}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#scheme ApiManagementBackend#scheme}. |

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.parameter"></a>

```java
public java.lang.String getParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#parameter ApiManagementBackend#parameter}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#scheme ApiManagementBackend#scheme}.

---

### ApiManagementBackendProxy <a name="ApiManagementBackendProxy" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendProxy;

ApiManagementBackendProxy.builder()
    .url(java.lang.String)
    .username(java.lang.String)
//  .password(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#url ApiManagementBackend#url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#username ApiManagementBackend#username}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#password ApiManagementBackend#password}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#url ApiManagementBackend#url}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#username ApiManagementBackend#username}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#password ApiManagementBackend#password}.

---

### ApiManagementBackendServiceFabricCluster <a name="ApiManagementBackendServiceFabricCluster" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendServiceFabricCluster;

ApiManagementBackendServiceFabricCluster.builder()
    .managementEndpoints(java.util.List<java.lang.String>)
    .maxPartitionResolutionRetries(java.lang.Number)
//  .clientCertificateId(java.lang.String)
//  .clientCertificateThumbprint(java.lang.String)
//  .serverCertificateThumbprints(java.util.List<java.lang.String>)
//  .serverX509Name(IResolvable)
//  .serverX509Name(java.util.List<ApiManagementBackendServiceFabricClusterServerX509Name>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.managementEndpoints">managementEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#management_endpoints ApiManagementBackend#management_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.maxPartitionResolutionRetries">maxPartitionResolutionRetries</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#client_certificate_id ApiManagementBackend#client_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverCertificateThumbprints">serverCertificateThumbprints</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverX509Name">serverX509Name</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>></code> | server_x509_name block. |

---

##### `managementEndpoints`<sup>Required</sup> <a name="managementEndpoints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.managementEndpoints"></a>

```java
public java.util.List<java.lang.String> getManagementEndpoints();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#management_endpoints ApiManagementBackend#management_endpoints}.

---

##### `maxPartitionResolutionRetries`<sup>Required</sup> <a name="maxPartitionResolutionRetries" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.maxPartitionResolutionRetries"></a>

```java
public java.lang.Number getMaxPartitionResolutionRetries();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#max_partition_resolution_retries ApiManagementBackend#max_partition_resolution_retries}.

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#client_certificate_id ApiManagementBackend#client_certificate_id}.

---

##### `clientCertificateThumbprint`<sup>Optional</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.clientCertificateThumbprint"></a>

```java
public java.lang.String getClientCertificateThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#client_certificate_thumbprint ApiManagementBackend#client_certificate_thumbprint}.

---

##### `serverCertificateThumbprints`<sup>Optional</sup> <a name="serverCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverCertificateThumbprints"></a>

```java
public java.util.List<java.lang.String> getServerCertificateThumbprints();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#server_certificate_thumbprints ApiManagementBackend#server_certificate_thumbprints}.

---

##### `serverX509Name`<sup>Optional</sup> <a name="serverX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster.property.serverX509Name"></a>

```java
public java.lang.Object getServerX509Name();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>>

server_x509_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#server_x509_name ApiManagementBackend#server_x509_name}

---

### ApiManagementBackendServiceFabricClusterServerX509Name <a name="ApiManagementBackendServiceFabricClusterServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendServiceFabricClusterServerX509Name;

ApiManagementBackendServiceFabricClusterServerX509Name.builder()
    .issuerCertificateThumbprint(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.issuerCertificateThumbprint">issuerCertificateThumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#name ApiManagementBackend#name}. |

---

##### `issuerCertificateThumbprint`<sup>Required</sup> <a name="issuerCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.issuerCertificateThumbprint"></a>

```java
public java.lang.String getIssuerCertificateThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#issuer_certificate_thumbprint ApiManagementBackend#issuer_certificate_thumbprint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#name ApiManagementBackend#name}.

---

### ApiManagementBackendTimeouts <a name="ApiManagementBackendTimeouts" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendTimeouts;

ApiManagementBackendTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#create ApiManagementBackend#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#delete ApiManagementBackend#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#read ApiManagementBackend#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#update ApiManagementBackend#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#create ApiManagementBackend#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#delete ApiManagementBackend#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#read ApiManagementBackend#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#update ApiManagementBackend#update}.

---

### ApiManagementBackendTls <a name="ApiManagementBackendTls" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendTls;

ApiManagementBackendTls.builder()
//  .validateCertificateChain(java.lang.Boolean)
//  .validateCertificateChain(IResolvable)
//  .validateCertificateName(java.lang.Boolean)
//  .validateCertificateName(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateChain">validateCertificateChain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateName">validateCertificateName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#validate_certificate_name ApiManagementBackend#validate_certificate_name}. |

---

##### `validateCertificateChain`<sup>Optional</sup> <a name="validateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateChain"></a>

```java
public java.lang.Object getValidateCertificateChain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#validate_certificate_chain ApiManagementBackend#validate_certificate_chain}.

---

##### `validateCertificateName`<sup>Optional</sup> <a name="validateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls.property.validateCertificateName"></a>

```java
public java.lang.Object getValidateCertificateName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_backend#validate_certificate_name ApiManagementBackend#validate_certificate_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementBackendCredentialsAuthorizationOutputReference <a name="ApiManagementBackendCredentialsAuthorizationOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendCredentialsAuthorizationOutputReference;

new ApiManagementBackendCredentialsAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetParameter"></a>

```java
public void resetParameter()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.resetScheme"></a>

```java
public void resetScheme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameterInput">parameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameter">parameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameterInput"></a>

```java
public java.lang.String getParameterInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.parameter"></a>

```java
public java.lang.String getParameter();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference.property.internalValue"></a>

```java
public ApiManagementBackendCredentialsAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---


### ApiManagementBackendCredentialsOutputReference <a name="ApiManagementBackendCredentialsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendCredentialsOutputReference;

new ApiManagementBackendCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization"></a>

```java
public void putAuthorization(ApiManagementBackendCredentialsAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference">ApiManagementBackendCredentialsAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.headerInput">headerInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.queryInput">queryInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificate">certificate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.header">header</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.query">query</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorization"></a>

```java
public ApiManagementBackendCredentialsAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorizationOutputReference">ApiManagementBackendCredentialsAuthorizationOutputReference</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.authorizationInput"></a>

```java
public ApiManagementBackendCredentialsAuthorization getAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsAuthorization">ApiManagementBackendCredentialsAuthorization</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificateInput"></a>

```java
public java.util.List<java.lang.String> getCertificateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.headerInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaderInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.queryInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQueryInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.certificate"></a>

```java
public java.util.List<java.lang.String> getCertificate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.header"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeader();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.query"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getQuery();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentialsOutputReference.property.internalValue"></a>

```java
public ApiManagementBackendCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendCredentials">ApiManagementBackendCredentials</a>

---


### ApiManagementBackendProxyOutputReference <a name="ApiManagementBackendProxyOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendProxyOutputReference;

new ApiManagementBackendProxyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resetPassword">resetPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.resetPassword"></a>

```java
public void resetPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxyOutputReference.property.internalValue"></a>

```java
public ApiManagementBackendProxy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendProxy">ApiManagementBackendProxy</a>

---


### ApiManagementBackendServiceFabricClusterOutputReference <a name="ApiManagementBackendServiceFabricClusterOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendServiceFabricClusterOutputReference;

new ApiManagementBackendServiceFabricClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name">putServerX509Name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateThumbprint">resetClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerCertificateThumbprints">resetServerCertificateThumbprints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerX509Name">resetServerX509Name</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerX509Name` <a name="putServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name"></a>

```java
public void putServerX509Name(IResolvable OR java.util.List<ApiManagementBackendServiceFabricClusterServerX509Name> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.putServerX509Name.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>>

---

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateId"></a>

```java
public void resetClientCertificateId()
```

##### `resetClientCertificateThumbprint` <a name="resetClientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetClientCertificateThumbprint"></a>

```java
public void resetClientCertificateThumbprint()
```

##### `resetServerCertificateThumbprints` <a name="resetServerCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerCertificateThumbprints"></a>

```java
public void resetServerCertificateThumbprints()
```

##### `resetServerX509Name` <a name="resetServerX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.resetServerX509Name"></a>

```java
public void resetServerX509Name()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509Name">serverX509Name</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList">ApiManagementBackendServiceFabricClusterServerX509NameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprintInput">clientCertificateThumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpointsInput">managementEndpointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetriesInput">maxPartitionResolutionRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprintsInput">serverCertificateThumbprintsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509NameInput">serverX509NameInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateId">clientCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpoints">managementEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetries">maxPartitionResolutionRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprints">serverCertificateThumbprints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverX509Name`<sup>Required</sup> <a name="serverX509Name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509Name"></a>

```java
public ApiManagementBackendServiceFabricClusterServerX509NameList getServerX509Name();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList">ApiManagementBackendServiceFabricClusterServerX509NameList</a>

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateIdInput"></a>

```java
public java.lang.String getClientCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateThumbprintInput`<sup>Optional</sup> <a name="clientCertificateThumbprintInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprintInput"></a>

```java
public java.lang.String getClientCertificateThumbprintInput();
```

- *Type:* java.lang.String

---

##### `managementEndpointsInput`<sup>Optional</sup> <a name="managementEndpointsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpointsInput"></a>

```java
public java.util.List<java.lang.String> getManagementEndpointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPartitionResolutionRetriesInput`<sup>Optional</sup> <a name="maxPartitionResolutionRetriesInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetriesInput"></a>

```java
public java.lang.Number getMaxPartitionResolutionRetriesInput();
```

- *Type:* java.lang.Number

---

##### `serverCertificateThumbprintsInput`<sup>Optional</sup> <a name="serverCertificateThumbprintsInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprintsInput"></a>

```java
public java.util.List<java.lang.String> getServerCertificateThumbprintsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverX509NameInput`<sup>Optional</sup> <a name="serverX509NameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverX509NameInput"></a>

```java
public java.lang.Object getServerX509NameInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>>

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateId"></a>

```java
public java.lang.String getClientCertificateId();
```

- *Type:* java.lang.String

---

##### `clientCertificateThumbprint`<sup>Required</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.clientCertificateThumbprint"></a>

```java
public java.lang.String getClientCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `managementEndpoints`<sup>Required</sup> <a name="managementEndpoints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.managementEndpoints"></a>

```java
public java.util.List<java.lang.String> getManagementEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxPartitionResolutionRetries`<sup>Required</sup> <a name="maxPartitionResolutionRetries" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.maxPartitionResolutionRetries"></a>

```java
public java.lang.Number getMaxPartitionResolutionRetries();
```

- *Type:* java.lang.Number

---

##### `serverCertificateThumbprints`<sup>Required</sup> <a name="serverCertificateThumbprints" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.serverCertificateThumbprints"></a>

```java
public java.util.List<java.lang.String> getServerCertificateThumbprints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterOutputReference.property.internalValue"></a>

```java
public ApiManagementBackendServiceFabricCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricCluster">ApiManagementBackendServiceFabricCluster</a>

---


### ApiManagementBackendServiceFabricClusterServerX509NameList <a name="ApiManagementBackendServiceFabricClusterServerX509NameList" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendServiceFabricClusterServerX509NameList;

new ApiManagementBackendServiceFabricClusterServerX509NameList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get"></a>

```java
public ApiManagementBackendServiceFabricClusterServerX509NameOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a>>

---


### ApiManagementBackendServiceFabricClusterServerX509NameOutputReference <a name="ApiManagementBackendServiceFabricClusterServerX509NameOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference;

new ApiManagementBackendServiceFabricClusterServerX509NameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprintInput">issuerCertificateThumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprint">issuerCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuerCertificateThumbprintInput`<sup>Optional</sup> <a name="issuerCertificateThumbprintInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprintInput"></a>

```java
public java.lang.String getIssuerCertificateThumbprintInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `issuerCertificateThumbprint`<sup>Required</sup> <a name="issuerCertificateThumbprint" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.issuerCertificateThumbprint"></a>

```java
public java.lang.String getIssuerCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509NameOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendServiceFabricClusterServerX509Name">ApiManagementBackendServiceFabricClusterServerX509Name</a> OR com.hashicorp.cdktf.IResolvable

---


### ApiManagementBackendTimeoutsOutputReference <a name="ApiManagementBackendTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendTimeoutsOutputReference;

new ApiManagementBackendTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTimeouts">ApiManagementBackendTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### ApiManagementBackendTlsOutputReference <a name="ApiManagementBackendTlsOutputReference" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.api_management_backend.ApiManagementBackendTlsOutputReference;

new ApiManagementBackendTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateChain">resetValidateCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateName">resetValidateCertificateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidateCertificateChain` <a name="resetValidateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateChain"></a>

```java
public void resetValidateCertificateChain()
```

##### `resetValidateCertificateName` <a name="resetValidateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.resetValidateCertificateName"></a>

```java
public void resetValidateCertificateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChainInput">validateCertificateChainInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateNameInput">validateCertificateNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChain">validateCertificateChain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateName">validateCertificateName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `validateCertificateChainInput`<sup>Optional</sup> <a name="validateCertificateChainInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChainInput"></a>

```java
public java.lang.Object getValidateCertificateChainInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validateCertificateNameInput`<sup>Optional</sup> <a name="validateCertificateNameInput" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateNameInput"></a>

```java
public java.lang.Object getValidateCertificateNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validateCertificateChain`<sup>Required</sup> <a name="validateCertificateChain" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateChain"></a>

```java
public java.lang.Object getValidateCertificateChain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validateCertificateName`<sup>Required</sup> <a name="validateCertificateName" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.validateCertificateName"></a>

```java
public java.lang.Object getValidateCertificateName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTlsOutputReference.property.internalValue"></a>

```java
public ApiManagementBackendTls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementBackend.ApiManagementBackendTls">ApiManagementBackendTls</a>

---



