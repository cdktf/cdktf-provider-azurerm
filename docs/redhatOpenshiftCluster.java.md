# `redhatOpenshiftCluster` Submodule <a name="`redhatOpenshiftCluster` Submodule" id="@cdktf/provider-azurerm.redhatOpenshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedhatOpenshiftCluster <a name="RedhatOpenshiftCluster" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster azurerm_redhat_openshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftCluster;

RedhatOpenshiftCluster.Builder.create(Construct scope, java.lang.String id)
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
    .apiServerProfile(RedhatOpenshiftClusterApiServerProfile)
    .clusterProfile(RedhatOpenshiftClusterClusterProfile)
    .ingressProfile(RedhatOpenshiftClusterIngressProfile)
    .location(java.lang.String)
    .mainProfile(RedhatOpenshiftClusterMainProfile)
    .name(java.lang.String)
    .networkProfile(RedhatOpenshiftClusterNetworkProfile)
    .resourceGroupName(java.lang.String)
    .servicePrincipal(RedhatOpenshiftClusterServicePrincipal)
    .workerProfile(RedhatOpenshiftClusterWorkerProfile)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RedhatOpenshiftClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.apiServerProfile">apiServerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | api_server_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.clusterProfile">clusterProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | cluster_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.ingressProfile">ingressProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | ingress_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.mainProfile">mainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | main_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.workerProfile">workerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | worker_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiServerProfile`<sup>Required</sup> <a name="apiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.apiServerProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

api_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#api_server_profile RedhatOpenshiftCluster#api_server_profile}

---

##### `clusterProfile`<sup>Required</sup> <a name="clusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.clusterProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

cluster_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#cluster_profile RedhatOpenshiftCluster#cluster_profile}

---

##### `ingressProfile`<sup>Required</sup> <a name="ingressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.ingressProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

ingress_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#ingress_profile RedhatOpenshiftCluster#ingress_profile}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}.

---

##### `mainProfile`<sup>Required</sup> <a name="mainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.mainProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

main_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#main_profile RedhatOpenshiftCluster#main_profile}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#network_profile RedhatOpenshiftCluster#network_profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}.

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.servicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#service_principal RedhatOpenshiftCluster#service_principal}

---

##### `workerProfile`<sup>Required</sup> <a name="workerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.workerProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

worker_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#worker_profile RedhatOpenshiftCluster#worker_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#timeouts RedhatOpenshiftCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile">putApiServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile">putClusterProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile">putIngressProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile">putMainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile">putNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal">putServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile">putWorkerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiServerProfile` <a name="putApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile"></a>

```java
public void putApiServerProfile(RedhatOpenshiftClusterApiServerProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putApiServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---

##### `putClusterProfile` <a name="putClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile"></a>

```java
public void putClusterProfile(RedhatOpenshiftClusterClusterProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putClusterProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---

##### `putIngressProfile` <a name="putIngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile"></a>

```java
public void putIngressProfile(RedhatOpenshiftClusterIngressProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putIngressProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---

##### `putMainProfile` <a name="putMainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile"></a>

```java
public void putMainProfile(RedhatOpenshiftClusterMainProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putMainProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---

##### `putNetworkProfile` <a name="putNetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile"></a>

```java
public void putNetworkProfile(RedhatOpenshiftClusterNetworkProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---

##### `putServicePrincipal` <a name="putServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal"></a>

```java
public void putServicePrincipal(RedhatOpenshiftClusterServicePrincipal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts"></a>

```java
public void putTimeouts(RedhatOpenshiftClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

---

##### `putWorkerProfile` <a name="putWorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile"></a>

```java
public void putWorkerProfile(RedhatOpenshiftClusterWorkerProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.putWorkerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftCluster;

RedhatOpenshiftCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftCluster;

RedhatOpenshiftCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftCluster;

RedhatOpenshiftCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftCluster;

RedhatOpenshiftCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedhatOpenshiftCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RedhatOpenshiftCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedhatOpenshiftCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedhatOpenshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RedhatOpenshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile">apiServerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile">clusterProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl">consoleUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile">ingressProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile">mainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile">workerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput">apiServerProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput">clusterProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput">ingressProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput">mainProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput">networkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput">workerProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiServerProfile`<sup>Required</sup> <a name="apiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfile"></a>

```java
public RedhatOpenshiftClusterApiServerProfileOutputReference getApiServerProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference">RedhatOpenshiftClusterApiServerProfileOutputReference</a>

---

##### `clusterProfile`<sup>Required</sup> <a name="clusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfile"></a>

```java
public RedhatOpenshiftClusterClusterProfileOutputReference getClusterProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference">RedhatOpenshiftClusterClusterProfileOutputReference</a>

---

##### `consoleUrl`<sup>Required</sup> <a name="consoleUrl" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.consoleUrl"></a>

```java
public java.lang.String getConsoleUrl();
```

- *Type:* java.lang.String

---

##### `ingressProfile`<sup>Required</sup> <a name="ingressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfile"></a>

```java
public RedhatOpenshiftClusterIngressProfileOutputReference getIngressProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference">RedhatOpenshiftClusterIngressProfileOutputReference</a>

---

##### `mainProfile`<sup>Required</sup> <a name="mainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfile"></a>

```java
public RedhatOpenshiftClusterMainProfileOutputReference getMainProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference">RedhatOpenshiftClusterMainProfileOutputReference</a>

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfile"></a>

```java
public RedhatOpenshiftClusterNetworkProfileOutputReference getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference">RedhatOpenshiftClusterNetworkProfileOutputReference</a>

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipal"></a>

```java
public RedhatOpenshiftClusterServicePrincipalOutputReference getServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference">RedhatOpenshiftClusterServicePrincipalOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeouts"></a>

```java
public RedhatOpenshiftClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference">RedhatOpenshiftClusterTimeoutsOutputReference</a>

---

##### `workerProfile`<sup>Required</sup> <a name="workerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfile"></a>

```java
public RedhatOpenshiftClusterWorkerProfileOutputReference getWorkerProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference">RedhatOpenshiftClusterWorkerProfileOutputReference</a>

---

##### `apiServerProfileInput`<sup>Optional</sup> <a name="apiServerProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.apiServerProfileInput"></a>

```java
public RedhatOpenshiftClusterApiServerProfile getApiServerProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---

##### `clusterProfileInput`<sup>Optional</sup> <a name="clusterProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.clusterProfileInput"></a>

```java
public RedhatOpenshiftClusterClusterProfile getClusterProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressProfileInput`<sup>Optional</sup> <a name="ingressProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.ingressProfileInput"></a>

```java
public RedhatOpenshiftClusterIngressProfile getIngressProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mainProfileInput`<sup>Optional</sup> <a name="mainProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.mainProfileInput"></a>

```java
public RedhatOpenshiftClusterMainProfile getMainProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.networkProfileInput"></a>

```java
public RedhatOpenshiftClusterNetworkProfile getNetworkProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.servicePrincipalInput"></a>

```java
public RedhatOpenshiftClusterServicePrincipal getServicePrincipalInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

---

##### `workerProfileInput`<sup>Optional</sup> <a name="workerProfileInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.workerProfileInput"></a>

```java
public RedhatOpenshiftClusterWorkerProfile getWorkerProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedhatOpenshiftClusterApiServerProfile <a name="RedhatOpenshiftClusterApiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterApiServerProfile;

RedhatOpenshiftClusterApiServerProfile.builder()
    .visibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterClusterProfile <a name="RedhatOpenshiftClusterClusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterClusterProfile;

RedhatOpenshiftClusterClusterProfile.builder()
    .domain(java.lang.String)
    .version(java.lang.String)
//  .fipsEnabled(java.lang.Boolean)
//  .fipsEnabled(IResolvable)
//  .managedResourceGroupName(java.lang.String)
//  .pullSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret">pullSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#domain RedhatOpenshiftCluster#domain}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#version RedhatOpenshiftCluster#version}.

---

##### `fipsEnabled`<sup>Optional</sup> <a name="fipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.fipsEnabled"></a>

```java
public java.lang.Object getFipsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#fips_enabled RedhatOpenshiftCluster#fips_enabled}.

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#managed_resource_group_name RedhatOpenshiftCluster#managed_resource_group_name}.

---

##### `pullSecret`<sup>Optional</sup> <a name="pullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile.property.pullSecret"></a>

```java
public java.lang.String getPullSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#pull_secret RedhatOpenshiftCluster#pull_secret}.

---

### RedhatOpenshiftClusterConfig <a name="RedhatOpenshiftClusterConfig" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterConfig;

RedhatOpenshiftClusterConfig.builder()
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
    .apiServerProfile(RedhatOpenshiftClusterApiServerProfile)
    .clusterProfile(RedhatOpenshiftClusterClusterProfile)
    .ingressProfile(RedhatOpenshiftClusterIngressProfile)
    .location(java.lang.String)
    .mainProfile(RedhatOpenshiftClusterMainProfile)
    .name(java.lang.String)
    .networkProfile(RedhatOpenshiftClusterNetworkProfile)
    .resourceGroupName(java.lang.String)
    .servicePrincipal(RedhatOpenshiftClusterServicePrincipal)
    .workerProfile(RedhatOpenshiftClusterWorkerProfile)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RedhatOpenshiftClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile">apiServerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | api_server_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile">clusterProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | cluster_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile">ingressProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | ingress_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile">mainProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | main_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal">servicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile">workerProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | worker_profile block. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiServerProfile`<sup>Required</sup> <a name="apiServerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.apiServerProfile"></a>

```java
public RedhatOpenshiftClusterApiServerProfile getApiServerProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

api_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#api_server_profile RedhatOpenshiftCluster#api_server_profile}

---

##### `clusterProfile`<sup>Required</sup> <a name="clusterProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.clusterProfile"></a>

```java
public RedhatOpenshiftClusterClusterProfile getClusterProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

cluster_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#cluster_profile RedhatOpenshiftCluster#cluster_profile}

---

##### `ingressProfile`<sup>Required</sup> <a name="ingressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.ingressProfile"></a>

```java
public RedhatOpenshiftClusterIngressProfile getIngressProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

ingress_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#ingress_profile RedhatOpenshiftCluster#ingress_profile}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#location RedhatOpenshiftCluster#location}.

---

##### `mainProfile`<sup>Required</sup> <a name="mainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.mainProfile"></a>

```java
public RedhatOpenshiftClusterMainProfile getMainProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

main_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#main_profile RedhatOpenshiftCluster#main_profile}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#name RedhatOpenshiftCluster#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.networkProfile"></a>

```java
public RedhatOpenshiftClusterNetworkProfile getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#network_profile RedhatOpenshiftCluster#network_profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#resource_group_name RedhatOpenshiftCluster#resource_group_name}.

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.servicePrincipal"></a>

```java
public RedhatOpenshiftClusterServicePrincipal getServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#service_principal RedhatOpenshiftCluster#service_principal}

---

##### `workerProfile`<sup>Required</sup> <a name="workerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.workerProfile"></a>

```java
public RedhatOpenshiftClusterWorkerProfile getWorkerProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

worker_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#worker_profile RedhatOpenshiftCluster#worker_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#id RedhatOpenshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#tags RedhatOpenshiftCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterConfig.property.timeouts"></a>

```java
public RedhatOpenshiftClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#timeouts RedhatOpenshiftCluster#timeouts}

---

### RedhatOpenshiftClusterIngressProfile <a name="RedhatOpenshiftClusterIngressProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterIngressProfile;

RedhatOpenshiftClusterIngressProfile.builder()
    .visibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility">visibility</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}. |

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#visibility RedhatOpenshiftCluster#visibility}.

---

### RedhatOpenshiftClusterMainProfile <a name="RedhatOpenshiftClusterMainProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterMainProfile;

RedhatOpenshiftClusterMainProfile.builder()
    .subnetId(java.lang.String)
    .vmSize(java.lang.String)
//  .diskEncryptionSetId(java.lang.String)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

### RedhatOpenshiftClusterNetworkProfile <a name="RedhatOpenshiftClusterNetworkProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterNetworkProfile;

RedhatOpenshiftClusterNetworkProfile.builder()
    .podCidr(java.lang.String)
    .serviceCidr(java.lang.String)
//  .outboundType(java.lang.String)
//  .preconfiguredNetworkSecurityGroupEnabled(java.lang.Boolean)
//  .preconfiguredNetworkSecurityGroupEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr">podCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr">serviceCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType">outboundType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled">preconfiguredNetworkSecurityGroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}. |

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.podCidr"></a>

```java
public java.lang.String getPodCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#pod_cidr RedhatOpenshiftCluster#pod_cidr}.

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.serviceCidr"></a>

```java
public java.lang.String getServiceCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#service_cidr RedhatOpenshiftCluster#service_cidr}.

---

##### `outboundType`<sup>Optional</sup> <a name="outboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.outboundType"></a>

```java
public java.lang.String getOutboundType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#outbound_type RedhatOpenshiftCluster#outbound_type}.

---

##### `preconfiguredNetworkSecurityGroupEnabled`<sup>Optional</sup> <a name="preconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```java
public java.lang.Object getPreconfiguredNetworkSecurityGroupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#preconfigured_network_security_group_enabled RedhatOpenshiftCluster#preconfigured_network_security_group_enabled}.

---

### RedhatOpenshiftClusterServicePrincipal <a name="RedhatOpenshiftClusterServicePrincipal" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterServicePrincipal;

RedhatOpenshiftClusterServicePrincipal.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#client_id RedhatOpenshiftCluster#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#client_secret RedhatOpenshiftCluster#client_secret}.

---

### RedhatOpenshiftClusterTimeouts <a name="RedhatOpenshiftClusterTimeouts" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterTimeouts;

RedhatOpenshiftClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#create RedhatOpenshiftCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#delete RedhatOpenshiftCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#read RedhatOpenshiftCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#update RedhatOpenshiftCluster#update}.

---

### RedhatOpenshiftClusterWorkerProfile <a name="RedhatOpenshiftClusterWorkerProfile" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterWorkerProfile;

RedhatOpenshiftClusterWorkerProfile.builder()
    .diskSizeGb(java.lang.Number)
    .nodeCount(java.lang.Number)
    .subnetId(java.lang.String)
    .vmSize(java.lang.String)
//  .diskEncryptionSetId(java.lang.String)
//  .encryptionAtHostEnabled(java.lang.Boolean)
//  .encryptionAtHostEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}. |

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#disk_size_gb RedhatOpenshiftCluster#disk_size_gb}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#node_count RedhatOpenshiftCluster#node_count}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#subnet_id RedhatOpenshiftCluster#subnet_id}.

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#vm_size RedhatOpenshiftCluster#vm_size}.

---

##### `diskEncryptionSetId`<sup>Optional</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#disk_encryption_set_id RedhatOpenshiftCluster#disk_encryption_set_id}.

---

##### `encryptionAtHostEnabled`<sup>Optional</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/resources/redhat_openshift_cluster#encryption_at_host_enabled RedhatOpenshiftCluster#encryption_at_host_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedhatOpenshiftClusterApiServerProfileOutputReference <a name="RedhatOpenshiftClusterApiServerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterApiServerProfileOutputReference;

new RedhatOpenshiftClusterApiServerProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfileOutputReference.property.internalValue"></a>

```java
public RedhatOpenshiftClusterApiServerProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterApiServerProfile">RedhatOpenshiftClusterApiServerProfile</a>

---


### RedhatOpenshiftClusterClusterProfileOutputReference <a name="RedhatOpenshiftClusterClusterProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterClusterProfileOutputReference;

new RedhatOpenshiftClusterClusterProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled">resetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret">resetPullSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFipsEnabled` <a name="resetFipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetFipsEnabled"></a>

```java
public void resetFipsEnabled()
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetManagedResourceGroupName"></a>

```java
public void resetManagedResourceGroupName()
```

##### `resetPullSecret` <a name="resetPullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.resetPullSecret"></a>

```java
public void resetPullSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId">resourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput">fipsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput">pullSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled">fipsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret">pullSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceGroupId`<sup>Required</sup> <a name="resourceGroupId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.resourceGroupId"></a>

```java
public java.lang.String getResourceGroupId();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `fipsEnabledInput`<sup>Optional</sup> <a name="fipsEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabledInput"></a>

```java
public java.lang.Object getFipsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupNameInput"></a>

```java
public java.lang.String getManagedResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `pullSecretInput`<sup>Optional</sup> <a name="pullSecretInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecretInput"></a>

```java
public java.lang.String getPullSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `fipsEnabled`<sup>Required</sup> <a name="fipsEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.fipsEnabled"></a>

```java
public java.lang.Object getFipsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

---

##### `pullSecret`<sup>Required</sup> <a name="pullSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.pullSecret"></a>

```java
public java.lang.String getPullSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfileOutputReference.property.internalValue"></a>

```java
public RedhatOpenshiftClusterClusterProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterClusterProfile">RedhatOpenshiftClusterClusterProfile</a>

---


### RedhatOpenshiftClusterIngressProfileOutputReference <a name="RedhatOpenshiftClusterIngressProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterIngressProfileOutputReference;

new RedhatOpenshiftClusterIngressProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfileOutputReference.property.internalValue"></a>

```java
public RedhatOpenshiftClusterIngressProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterIngressProfile">RedhatOpenshiftClusterIngressProfile</a>

---


### RedhatOpenshiftClusterMainProfileOutputReference <a name="RedhatOpenshiftClusterMainProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterMainProfileOutputReference;

new RedhatOpenshiftClusterMainProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetDiskEncryptionSetId"></a>

```java
public void resetDiskEncryptionSetId()
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```java
public void resetEncryptionAtHostEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```java
public java.lang.String getDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtHostEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfileOutputReference.property.internalValue"></a>

```java
public RedhatOpenshiftClusterMainProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterMainProfile">RedhatOpenshiftClusterMainProfile</a>

---


### RedhatOpenshiftClusterNetworkProfileOutputReference <a name="RedhatOpenshiftClusterNetworkProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterNetworkProfileOutputReference;

new RedhatOpenshiftClusterNetworkProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType">resetOutboundType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled">resetPreconfiguredNetworkSecurityGroupEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutboundType` <a name="resetOutboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetOutboundType"></a>

```java
public void resetOutboundType()
```

##### `resetPreconfiguredNetworkSecurityGroupEnabled` <a name="resetPreconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.resetPreconfiguredNetworkSecurityGroupEnabled"></a>

```java
public void resetPreconfiguredNetworkSecurityGroupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput">outboundTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput">podCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput">preconfiguredNetworkSecurityGroupEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput">serviceCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType">outboundType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr">podCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled">preconfiguredNetworkSecurityGroupEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr">serviceCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outboundTypeInput`<sup>Optional</sup> <a name="outboundTypeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundTypeInput"></a>

```java
public java.lang.String getOutboundTypeInput();
```

- *Type:* java.lang.String

---

##### `podCidrInput`<sup>Optional</sup> <a name="podCidrInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidrInput"></a>

```java
public java.lang.String getPodCidrInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredNetworkSecurityGroupEnabledInput`<sup>Optional</sup> <a name="preconfiguredNetworkSecurityGroupEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabledInput"></a>

```java
public java.lang.Object getPreconfiguredNetworkSecurityGroupEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceCidrInput`<sup>Optional</sup> <a name="serviceCidrInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidrInput"></a>

```java
public java.lang.String getServiceCidrInput();
```

- *Type:* java.lang.String

---

##### `outboundType`<sup>Required</sup> <a name="outboundType" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.outboundType"></a>

```java
public java.lang.String getOutboundType();
```

- *Type:* java.lang.String

---

##### `podCidr`<sup>Required</sup> <a name="podCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.podCidr"></a>

```java
public java.lang.String getPodCidr();
```

- *Type:* java.lang.String

---

##### `preconfiguredNetworkSecurityGroupEnabled`<sup>Required</sup> <a name="preconfiguredNetworkSecurityGroupEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.preconfiguredNetworkSecurityGroupEnabled"></a>

```java
public java.lang.Object getPreconfiguredNetworkSecurityGroupEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceCidr`<sup>Required</sup> <a name="serviceCidr" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.serviceCidr"></a>

```java
public java.lang.String getServiceCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfileOutputReference.property.internalValue"></a>

```java
public RedhatOpenshiftClusterNetworkProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterNetworkProfile">RedhatOpenshiftClusterNetworkProfile</a>

---


### RedhatOpenshiftClusterServicePrincipalOutputReference <a name="RedhatOpenshiftClusterServicePrincipalOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterServicePrincipalOutputReference;

new RedhatOpenshiftClusterServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipalOutputReference.property.internalValue"></a>

```java
public RedhatOpenshiftClusterServicePrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterServicePrincipal">RedhatOpenshiftClusterServicePrincipal</a>

---


### RedhatOpenshiftClusterTimeoutsOutputReference <a name="RedhatOpenshiftClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterTimeoutsOutputReference;

new RedhatOpenshiftClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterTimeouts">RedhatOpenshiftClusterTimeouts</a>

---


### RedhatOpenshiftClusterWorkerProfileOutputReference <a name="RedhatOpenshiftClusterWorkerProfileOutputReference" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redhat_openshift_cluster.RedhatOpenshiftClusterWorkerProfileOutputReference;

new RedhatOpenshiftClusterWorkerProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId">resetDiskEncryptionSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled">resetEncryptionAtHostEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionSetId` <a name="resetDiskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetDiskEncryptionSetId"></a>

```java
public void resetDiskEncryptionSetId()
```

##### `resetEncryptionAtHostEnabled` <a name="resetEncryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.resetEncryptionAtHostEnabled"></a>

```java
public void resetEncryptionAtHostEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput">diskEncryptionSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput">encryptionAtHostEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput">vmSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled">encryptionAtHostEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize">vmSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetIdInput`<sup>Optional</sup> <a name="diskEncryptionSetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetIdInput"></a>

```java
public java.lang.String getDiskEncryptionSetIdInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `encryptionAtHostEnabledInput`<sup>Optional</sup> <a name="encryptionAtHostEnabledInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabledInput"></a>

```java
public java.lang.Object getEncryptionAtHostEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `vmSizeInput`<sup>Optional</sup> <a name="vmSizeInput" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSizeInput"></a>

```java
public java.lang.String getVmSizeInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `encryptionAtHostEnabled`<sup>Required</sup> <a name="encryptionAtHostEnabled" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.encryptionAtHostEnabled"></a>

```java
public java.lang.Object getEncryptionAtHostEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `vmSize`<sup>Required</sup> <a name="vmSize" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.vmSize"></a>

```java
public java.lang.String getVmSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfileOutputReference.property.internalValue"></a>

```java
public RedhatOpenshiftClusterWorkerProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redhatOpenshiftCluster.RedhatOpenshiftClusterWorkerProfile">RedhatOpenshiftClusterWorkerProfile</a>

---



