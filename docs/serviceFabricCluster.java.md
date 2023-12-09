# `serviceFabricCluster` Submodule <a name="`serviceFabricCluster` Submodule" id="@cdktf/provider-azurerm.serviceFabricCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceFabricCluster <a name="ServiceFabricCluster" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster azurerm_service_fabric_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricCluster;

ServiceFabricCluster.Builder.create(Construct scope, java.lang.String id)
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
    .managementEndpoint(java.lang.String)
    .name(java.lang.String)
    .nodeType(IResolvable)
    .nodeType(java.util.List<ServiceFabricClusterNodeType>)
    .reliabilityLevel(java.lang.String)
    .resourceGroupName(java.lang.String)
    .upgradeMode(java.lang.String)
    .vmImage(java.lang.String)
//  .addOnFeatures(java.util.List<java.lang.String>)
//  .azureActiveDirectory(ServiceFabricClusterAzureActiveDirectory)
//  .certificate(ServiceFabricClusterCertificate)
//  .certificateCommonNames(ServiceFabricClusterCertificateCommonNames)
//  .clientCertificateCommonName(IResolvable)
//  .clientCertificateCommonName(java.util.List<ServiceFabricClusterClientCertificateCommonName>)
//  .clientCertificateThumbprint(IResolvable)
//  .clientCertificateThumbprint(java.util.List<ServiceFabricClusterClientCertificateThumbprint>)
//  .clusterCodeVersion(java.lang.String)
//  .diagnosticsConfig(ServiceFabricClusterDiagnosticsConfig)
//  .fabricSettings(IResolvable)
//  .fabricSettings(java.util.List<ServiceFabricClusterFabricSettings>)
//  .id(java.lang.String)
//  .reverseProxyCertificate(ServiceFabricClusterReverseProxyCertificate)
//  .reverseProxyCertificateCommonNames(ServiceFabricClusterReverseProxyCertificateCommonNames)
//  .serviceFabricZonalUpgradeMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ServiceFabricClusterTimeouts)
//  .upgradePolicy(ServiceFabricClusterUpgradePolicy)
//  .vmssZonalUpgradeMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.managementEndpoint">managementEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>></code> | node_type block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.reliabilityLevel">reliabilityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.upgradeMode">upgradeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.vmImage">vmImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.addOnFeatures">addOnFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | azure_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.certificateCommonNames">certificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.clientCertificateCommonName">clientCertificateCommonName</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>></code> | client_certificate_common_name block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>></code> | client_certificate_thumbprint block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.clusterCodeVersion">clusterCodeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.diagnosticsConfig">diagnosticsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | diagnostics_config block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.fabricSettings">fabricSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>></code> | fabric_settings block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.reverseProxyCertificate">reverseProxyCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | reverse_proxy_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.reverseProxyCertificateCommonNames">reverseProxyCertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | reverse_proxy_certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.serviceFabricZonalUpgradeMode">serviceFabricZonalUpgradeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.vmssZonalUpgradeMode">vmssZonalUpgradeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}.

---

##### `managementEndpoint`<sup>Required</sup> <a name="managementEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.managementEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.nodeType"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>>

node_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#node_type ServiceFabricCluster#node_type}

---

##### `reliabilityLevel`<sup>Required</sup> <a name="reliabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.reliabilityLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}.

---

##### `upgradeMode`<sup>Required</sup> <a name="upgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.upgradeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}.

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.vmImage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}.

---

##### `addOnFeatures`<sup>Optional</sup> <a name="addOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.addOnFeatures"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}.

---

##### `azureActiveDirectory`<sup>Optional</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.azureActiveDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

azure_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#azure_active_directory ServiceFabricCluster#azure_active_directory}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.certificate"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate ServiceFabricCluster#certificate}

---

##### `certificateCommonNames`<sup>Optional</sup> <a name="certificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.certificateCommonNames"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_common_names ServiceFabricCluster#certificate_common_names}

---

##### `clientCertificateCommonName`<sup>Optional</sup> <a name="clientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.clientCertificateCommonName"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>>

client_certificate_common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_certificate_common_name ServiceFabricCluster#client_certificate_common_name}

---

##### `clientCertificateThumbprint`<sup>Optional</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.clientCertificateThumbprint"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>>

client_certificate_thumbprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_certificate_thumbprint ServiceFabricCluster#client_certificate_thumbprint}

---

##### `clusterCodeVersion`<sup>Optional</sup> <a name="clusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.clusterCodeVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}.

---

##### `diagnosticsConfig`<sup>Optional</sup> <a name="diagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.diagnosticsConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

diagnostics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#diagnostics_config ServiceFabricCluster#diagnostics_config}

---

##### `fabricSettings`<sup>Optional</sup> <a name="fabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.fabricSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>>

fabric_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#fabric_settings ServiceFabricCluster#fabric_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reverseProxyCertificate`<sup>Optional</sup> <a name="reverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.reverseProxyCertificate"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

reverse_proxy_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate ServiceFabricCluster#reverse_proxy_certificate}

---

##### `reverseProxyCertificateCommonNames`<sup>Optional</sup> <a name="reverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.reverseProxyCertificateCommonNames"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

reverse_proxy_certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate_common_names ServiceFabricCluster#reverse_proxy_certificate_common_names}

---

##### `serviceFabricZonalUpgradeMode`<sup>Optional</sup> <a name="serviceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.serviceFabricZonalUpgradeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#timeouts ServiceFabricCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.upgradePolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_policy ServiceFabricCluster#upgrade_policy}

---

##### `vmssZonalUpgradeMode`<sup>Optional</sup> <a name="vmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.Initializer.parameter.vmssZonalUpgradeMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory">putAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames">putCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName">putClientCertificateCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint">putClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig">putDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings">putFabricSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType">putNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate">putReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames">putReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy">putUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAddOnFeatures">resetAddOnFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAzureActiveDirectory">resetAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificateCommonNames">resetCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateCommonName">resetClientCertificateCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateThumbprint">resetClientCertificateThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClusterCodeVersion">resetClusterCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetDiagnosticsConfig">resetDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetFabricSettings">resetFabricSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificate">resetReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificateCommonNames">resetReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetServiceFabricZonalUpgradeMode">resetServiceFabricZonalUpgradeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetUpgradePolicy">resetUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetVmssZonalUpgradeMode">resetVmssZonalUpgradeMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureActiveDirectory` <a name="putAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory"></a>

```java
public void putAzureActiveDirectory(ServiceFabricClusterAzureActiveDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putAzureActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---

##### `putCertificate` <a name="putCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate"></a>

```java
public void putCertificate(ServiceFabricClusterCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---

##### `putCertificateCommonNames` <a name="putCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames"></a>

```java
public void putCertificateCommonNames(ServiceFabricClusterCertificateCommonNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putCertificateCommonNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---

##### `putClientCertificateCommonName` <a name="putClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName"></a>

```java
public void putClientCertificateCommonName(IResolvable OR java.util.List<ServiceFabricClusterClientCertificateCommonName> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateCommonName.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>>

---

##### `putClientCertificateThumbprint` <a name="putClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint"></a>

```java
public void putClientCertificateThumbprint(IResolvable OR java.util.List<ServiceFabricClusterClientCertificateThumbprint> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putClientCertificateThumbprint.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>>

---

##### `putDiagnosticsConfig` <a name="putDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig"></a>

```java
public void putDiagnosticsConfig(ServiceFabricClusterDiagnosticsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putDiagnosticsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---

##### `putFabricSettings` <a name="putFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings"></a>

```java
public void putFabricSettings(IResolvable OR java.util.List<ServiceFabricClusterFabricSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putFabricSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>>

---

##### `putNodeType` <a name="putNodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType"></a>

```java
public void putNodeType(IResolvable OR java.util.List<ServiceFabricClusterNodeType> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putNodeType.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>>

---

##### `putReverseProxyCertificate` <a name="putReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate"></a>

```java
public void putReverseProxyCertificate(ServiceFabricClusterReverseProxyCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---

##### `putReverseProxyCertificateCommonNames` <a name="putReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames"></a>

```java
public void putReverseProxyCertificateCommonNames(ServiceFabricClusterReverseProxyCertificateCommonNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putReverseProxyCertificateCommonNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts"></a>

```java
public void putTimeouts(ServiceFabricClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

---

##### `putUpgradePolicy` <a name="putUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy"></a>

```java
public void putUpgradePolicy(ServiceFabricClusterUpgradePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.putUpgradePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---

##### `resetAddOnFeatures` <a name="resetAddOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAddOnFeatures"></a>

```java
public void resetAddOnFeatures()
```

##### `resetAzureActiveDirectory` <a name="resetAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetAzureActiveDirectory"></a>

```java
public void resetAzureActiveDirectory()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCertificateCommonNames` <a name="resetCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetCertificateCommonNames"></a>

```java
public void resetCertificateCommonNames()
```

##### `resetClientCertificateCommonName` <a name="resetClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateCommonName"></a>

```java
public void resetClientCertificateCommonName()
```

##### `resetClientCertificateThumbprint` <a name="resetClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClientCertificateThumbprint"></a>

```java
public void resetClientCertificateThumbprint()
```

##### `resetClusterCodeVersion` <a name="resetClusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetClusterCodeVersion"></a>

```java
public void resetClusterCodeVersion()
```

##### `resetDiagnosticsConfig` <a name="resetDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetDiagnosticsConfig"></a>

```java
public void resetDiagnosticsConfig()
```

##### `resetFabricSettings` <a name="resetFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetFabricSettings"></a>

```java
public void resetFabricSettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetId"></a>

```java
public void resetId()
```

##### `resetReverseProxyCertificate` <a name="resetReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificate"></a>

```java
public void resetReverseProxyCertificate()
```

##### `resetReverseProxyCertificateCommonNames` <a name="resetReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetReverseProxyCertificateCommonNames"></a>

```java
public void resetReverseProxyCertificateCommonNames()
```

##### `resetServiceFabricZonalUpgradeMode` <a name="resetServiceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetServiceFabricZonalUpgradeMode"></a>

```java
public void resetServiceFabricZonalUpgradeMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgradePolicy` <a name="resetUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetUpgradePolicy"></a>

```java
public void resetUpgradePolicy()
```

##### `resetVmssZonalUpgradeMode` <a name="resetVmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.resetVmssZonalUpgradeMode"></a>

```java
public void resetVmssZonalUpgradeMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceFabricCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricCluster;

ServiceFabricCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricCluster;

ServiceFabricCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricCluster;

ServiceFabricCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricCluster;

ServiceFabricCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceFabricCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceFabricCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceFabricCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceFabricCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceFabricCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference">ServiceFabricClusterAzureActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference">ServiceFabricClusterCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNames">certificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference">ServiceFabricClusterCertificateCommonNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonName">clientCertificateCommonName</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList">ServiceFabricClusterClientCertificateCommonNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList">ServiceFabricClusterClientCertificateThumbprintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterEndpoint">clusterEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfig">diagnosticsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference">ServiceFabricClusterDiagnosticsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettings">fabricSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList">ServiceFabricClusterFabricSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeType">nodeType</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList">ServiceFabricClusterNodeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificate">reverseProxyCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference">ServiceFabricClusterReverseProxyCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNames">reverseProxyCertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference">ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference">ServiceFabricClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference">ServiceFabricClusterUpgradePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeaturesInput">addOnFeaturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectoryInput">azureActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNamesInput">certificateCommonNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateInput">certificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonNameInput">clientCertificateCommonNameInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprintInput">clientCertificateThumbprintInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersionInput">clusterCodeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfigInput">diagnosticsConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettingsInput">fabricSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpointInput">managementEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevelInput">reliabilityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNamesInput">reverseProxyCertificateCommonNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateInput">reverseProxyCertificateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeModeInput">serviceFabricZonalUpgradeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeModeInput">upgradeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicyInput">upgradePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImageInput">vmImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeModeInput">vmssZonalUpgradeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeatures">addOnFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersion">clusterCodeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpoint">managementEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevel">reliabilityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeMode">serviceFabricZonalUpgradeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeMode">upgradeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImage">vmImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeMode">vmssZonalUpgradeMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureActiveDirectory`<sup>Required</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectory"></a>

```java
public ServiceFabricClusterAzureActiveDirectoryOutputReference getAzureActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference">ServiceFabricClusterAzureActiveDirectoryOutputReference</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificate"></a>

```java
public ServiceFabricClusterCertificateOutputReference getCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference">ServiceFabricClusterCertificateOutputReference</a>

---

##### `certificateCommonNames`<sup>Required</sup> <a name="certificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNames"></a>

```java
public ServiceFabricClusterCertificateCommonNamesOutputReference getCertificateCommonNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference">ServiceFabricClusterCertificateCommonNamesOutputReference</a>

---

##### `clientCertificateCommonName`<sup>Required</sup> <a name="clientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonName"></a>

```java
public ServiceFabricClusterClientCertificateCommonNameList getClientCertificateCommonName();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList">ServiceFabricClusterClientCertificateCommonNameList</a>

---

##### `clientCertificateThumbprint`<sup>Required</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprint"></a>

```java
public ServiceFabricClusterClientCertificateThumbprintList getClientCertificateThumbprint();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList">ServiceFabricClusterClientCertificateThumbprintList</a>

---

##### `clusterEndpoint`<sup>Required</sup> <a name="clusterEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterEndpoint"></a>

```java
public java.lang.String getClusterEndpoint();
```

- *Type:* java.lang.String

---

##### `diagnosticsConfig`<sup>Required</sup> <a name="diagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfig"></a>

```java
public ServiceFabricClusterDiagnosticsConfigOutputReference getDiagnosticsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference">ServiceFabricClusterDiagnosticsConfigOutputReference</a>

---

##### `fabricSettings`<sup>Required</sup> <a name="fabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettings"></a>

```java
public ServiceFabricClusterFabricSettingsList getFabricSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList">ServiceFabricClusterFabricSettingsList</a>

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeType"></a>

```java
public ServiceFabricClusterNodeTypeList getNodeType();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList">ServiceFabricClusterNodeTypeList</a>

---

##### `reverseProxyCertificate`<sup>Required</sup> <a name="reverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificate"></a>

```java
public ServiceFabricClusterReverseProxyCertificateOutputReference getReverseProxyCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference">ServiceFabricClusterReverseProxyCertificateOutputReference</a>

---

##### `reverseProxyCertificateCommonNames`<sup>Required</sup> <a name="reverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNames"></a>

```java
public ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference getReverseProxyCertificateCommonNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference">ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeouts"></a>

```java
public ServiceFabricClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference">ServiceFabricClusterTimeoutsOutputReference</a>

---

##### `upgradePolicy`<sup>Required</sup> <a name="upgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicy"></a>

```java
public ServiceFabricClusterUpgradePolicyOutputReference getUpgradePolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference">ServiceFabricClusterUpgradePolicyOutputReference</a>

---

##### `addOnFeaturesInput`<sup>Optional</sup> <a name="addOnFeaturesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeaturesInput"></a>

```java
public java.util.List<java.lang.String> getAddOnFeaturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `azureActiveDirectoryInput`<sup>Optional</sup> <a name="azureActiveDirectoryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.azureActiveDirectoryInput"></a>

```java
public ServiceFabricClusterAzureActiveDirectory getAzureActiveDirectoryInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---

##### `certificateCommonNamesInput`<sup>Optional</sup> <a name="certificateCommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateCommonNamesInput"></a>

```java
public ServiceFabricClusterCertificateCommonNames getCertificateCommonNamesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.certificateInput"></a>

```java
public ServiceFabricClusterCertificate getCertificateInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---

##### `clientCertificateCommonNameInput`<sup>Optional</sup> <a name="clientCertificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateCommonNameInput"></a>

```java
public java.lang.Object getClientCertificateCommonNameInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>>

---

##### `clientCertificateThumbprintInput`<sup>Optional</sup> <a name="clientCertificateThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clientCertificateThumbprintInput"></a>

```java
public java.lang.Object getClientCertificateThumbprintInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>>

---

##### `clusterCodeVersionInput`<sup>Optional</sup> <a name="clusterCodeVersionInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersionInput"></a>

```java
public java.lang.String getClusterCodeVersionInput();
```

- *Type:* java.lang.String

---

##### `diagnosticsConfigInput`<sup>Optional</sup> <a name="diagnosticsConfigInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.diagnosticsConfigInput"></a>

```java
public ServiceFabricClusterDiagnosticsConfig getDiagnosticsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---

##### `fabricSettingsInput`<sup>Optional</sup> <a name="fabricSettingsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.fabricSettingsInput"></a>

```java
public java.lang.Object getFabricSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managementEndpointInput`<sup>Optional</sup> <a name="managementEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpointInput"></a>

```java
public java.lang.String getManagementEndpointInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.nodeTypeInput"></a>

```java
public java.lang.Object getNodeTypeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>>

---

##### `reliabilityLevelInput`<sup>Optional</sup> <a name="reliabilityLevelInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevelInput"></a>

```java
public java.lang.String getReliabilityLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `reverseProxyCertificateCommonNamesInput`<sup>Optional</sup> <a name="reverseProxyCertificateCommonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateCommonNamesInput"></a>

```java
public ServiceFabricClusterReverseProxyCertificateCommonNames getReverseProxyCertificateCommonNamesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---

##### `reverseProxyCertificateInput`<sup>Optional</sup> <a name="reverseProxyCertificateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reverseProxyCertificateInput"></a>

```java
public ServiceFabricClusterReverseProxyCertificate getReverseProxyCertificateInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---

##### `serviceFabricZonalUpgradeModeInput`<sup>Optional</sup> <a name="serviceFabricZonalUpgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeModeInput"></a>

```java
public java.lang.String getServiceFabricZonalUpgradeModeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

---

##### `upgradeModeInput`<sup>Optional</sup> <a name="upgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeModeInput"></a>

```java
public java.lang.String getUpgradeModeInput();
```

- *Type:* java.lang.String

---

##### `upgradePolicyInput`<sup>Optional</sup> <a name="upgradePolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradePolicyInput"></a>

```java
public ServiceFabricClusterUpgradePolicy getUpgradePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImageInput"></a>

```java
public java.lang.String getVmImageInput();
```

- *Type:* java.lang.String

---

##### `vmssZonalUpgradeModeInput`<sup>Optional</sup> <a name="vmssZonalUpgradeModeInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeModeInput"></a>

```java
public java.lang.String getVmssZonalUpgradeModeInput();
```

- *Type:* java.lang.String

---

##### `addOnFeatures`<sup>Required</sup> <a name="addOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.addOnFeatures"></a>

```java
public java.util.List<java.lang.String> getAddOnFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterCodeVersion`<sup>Required</sup> <a name="clusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.clusterCodeVersion"></a>

```java
public java.lang.String getClusterCodeVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managementEndpoint`<sup>Required</sup> <a name="managementEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.managementEndpoint"></a>

```java
public java.lang.String getManagementEndpoint();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reliabilityLevel`<sup>Required</sup> <a name="reliabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.reliabilityLevel"></a>

```java
public java.lang.String getReliabilityLevel();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `serviceFabricZonalUpgradeMode`<sup>Required</sup> <a name="serviceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.serviceFabricZonalUpgradeMode"></a>

```java
public java.lang.String getServiceFabricZonalUpgradeMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `upgradeMode`<sup>Required</sup> <a name="upgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.upgradeMode"></a>

```java
public java.lang.String getUpgradeMode();
```

- *Type:* java.lang.String

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmImage"></a>

```java
public java.lang.String getVmImage();
```

- *Type:* java.lang.String

---

##### `vmssZonalUpgradeMode`<sup>Required</sup> <a name="vmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.vmssZonalUpgradeMode"></a>

```java
public java.lang.String getVmssZonalUpgradeMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceFabricClusterAzureActiveDirectory <a name="ServiceFabricClusterAzureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterAzureActiveDirectory;

ServiceFabricClusterAzureActiveDirectory.builder()
    .clientApplicationId(java.lang.String)
    .clusterApplicationId(java.lang.String)
    .tenantId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clientApplicationId">clientApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_application_id ServiceFabricCluster#client_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clusterApplicationId">clusterApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#cluster_application_id ServiceFabricCluster#cluster_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#tenant_id ServiceFabricCluster#tenant_id}. |

---

##### `clientApplicationId`<sup>Required</sup> <a name="clientApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clientApplicationId"></a>

```java
public java.lang.String getClientApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_application_id ServiceFabricCluster#client_application_id}.

---

##### `clusterApplicationId`<sup>Required</sup> <a name="clusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.clusterApplicationId"></a>

```java
public java.lang.String getClusterApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#cluster_application_id ServiceFabricCluster#cluster_application_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#tenant_id ServiceFabricCluster#tenant_id}.

---

### ServiceFabricClusterCertificate <a name="ServiceFabricClusterCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterCertificate;

ServiceFabricClusterCertificate.builder()
    .thumbprint(java.lang.String)
    .x509StoreName(java.lang.String)
//  .thumbprintSecondary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}. |

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

##### `thumbprintSecondary`<sup>Optional</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate.property.thumbprintSecondary"></a>

```java
public java.lang.String getThumbprintSecondary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}.

---

### ServiceFabricClusterCertificateCommonNames <a name="ServiceFabricClusterCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterCertificateCommonNames;

ServiceFabricClusterCertificateCommonNames.builder()
    .commonNames(IResolvable)
    .commonNames(java.util.List<ServiceFabricClusterCertificateCommonNamesCommonNames>)
    .x509StoreName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.commonNames">commonNames</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>></code> | common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.commonNames"></a>

```java
public java.lang.Object getCommonNames();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>>

common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

### ServiceFabricClusterCertificateCommonNamesCommonNames <a name="ServiceFabricClusterCertificateCommonNamesCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterCertificateCommonNamesCommonNames;

ServiceFabricClusterCertificateCommonNamesCommonNames.builder()
    .certificateCommonName(java.lang.String)
//  .certificateIssuerThumbprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateCommonName">certificateCommonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}. |

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateCommonName"></a>

```java
public java.lang.String getCertificateCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}.

---

##### `certificateIssuerThumbprint`<sup>Optional</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint"></a>

```java
public java.lang.String getCertificateIssuerThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}.

---

### ServiceFabricClusterClientCertificateCommonName <a name="ServiceFabricClusterClientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterClientCertificateCommonName;

ServiceFabricClusterClientCertificateCommonName.builder()
    .commonName(java.lang.String)
    .isAdmin(java.lang.Boolean)
    .isAdmin(IResolvable)
//  .issuerThumbprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.commonName">commonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#common_name ServiceFabricCluster#common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.isAdmin">isAdmin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.issuerThumbprint">issuerThumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}. |

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#common_name ServiceFabricCluster#common_name}.

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.isAdmin"></a>

```java
public java.lang.Object getIsAdmin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}.

---

##### `issuerThumbprint`<sup>Optional</sup> <a name="issuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName.property.issuerThumbprint"></a>

```java
public java.lang.String getIssuerThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#issuer_thumbprint ServiceFabricCluster#issuer_thumbprint}.

---

### ServiceFabricClusterClientCertificateThumbprint <a name="ServiceFabricClusterClientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterClientCertificateThumbprint;

ServiceFabricClusterClientCertificateThumbprint.builder()
    .isAdmin(java.lang.Boolean)
    .isAdmin(IResolvable)
    .thumbprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.isAdmin">isAdmin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.isAdmin"></a>

```java
public java.lang.Object getIsAdmin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_admin ServiceFabricCluster#is_admin}.

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

### ServiceFabricClusterConfig <a name="ServiceFabricClusterConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterConfig;

ServiceFabricClusterConfig.builder()
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
    .managementEndpoint(java.lang.String)
    .name(java.lang.String)
    .nodeType(IResolvable)
    .nodeType(java.util.List<ServiceFabricClusterNodeType>)
    .reliabilityLevel(java.lang.String)
    .resourceGroupName(java.lang.String)
    .upgradeMode(java.lang.String)
    .vmImage(java.lang.String)
//  .addOnFeatures(java.util.List<java.lang.String>)
//  .azureActiveDirectory(ServiceFabricClusterAzureActiveDirectory)
//  .certificate(ServiceFabricClusterCertificate)
//  .certificateCommonNames(ServiceFabricClusterCertificateCommonNames)
//  .clientCertificateCommonName(IResolvable)
//  .clientCertificateCommonName(java.util.List<ServiceFabricClusterClientCertificateCommonName>)
//  .clientCertificateThumbprint(IResolvable)
//  .clientCertificateThumbprint(java.util.List<ServiceFabricClusterClientCertificateThumbprint>)
//  .clusterCodeVersion(java.lang.String)
//  .diagnosticsConfig(ServiceFabricClusterDiagnosticsConfig)
//  .fabricSettings(IResolvable)
//  .fabricSettings(java.util.List<ServiceFabricClusterFabricSettings>)
//  .id(java.lang.String)
//  .reverseProxyCertificate(ServiceFabricClusterReverseProxyCertificate)
//  .reverseProxyCertificateCommonNames(ServiceFabricClusterReverseProxyCertificateCommonNames)
//  .serviceFabricZonalUpgradeMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ServiceFabricClusterTimeouts)
//  .upgradePolicy(ServiceFabricClusterUpgradePolicy)
//  .vmssZonalUpgradeMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.managementEndpoint">managementEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.nodeType">nodeType</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>></code> | node_type block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reliabilityLevel">reliabilityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradeMode">upgradeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmImage">vmImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.addOnFeatures">addOnFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.azureActiveDirectory">azureActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | azure_active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificateCommonNames">certificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateCommonName">clientCertificateCommonName</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>></code> | client_certificate_common_name block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateThumbprint">clientCertificateThumbprint</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>></code> | client_certificate_thumbprint block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clusterCodeVersion">clusterCodeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.diagnosticsConfig">diagnosticsConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | diagnostics_config block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.fabricSettings">fabricSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>></code> | fabric_settings block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificate">reverseProxyCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | reverse_proxy_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificateCommonNames">reverseProxyCertificateCommonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | reverse_proxy_certificate_common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.serviceFabricZonalUpgradeMode">serviceFabricZonalUpgradeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradePolicy">upgradePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | upgrade_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmssZonalUpgradeMode">vmssZonalUpgradeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#location ServiceFabricCluster#location}.

---

##### `managementEndpoint`<sup>Required</sup> <a name="managementEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.managementEndpoint"></a>

```java
public java.lang.String getManagementEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#management_endpoint ServiceFabricCluster#management_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.nodeType"></a>

```java
public java.lang.Object getNodeType();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>>

node_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#node_type ServiceFabricCluster#node_type}

---

##### `reliabilityLevel`<sup>Required</sup> <a name="reliabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reliabilityLevel"></a>

```java
public java.lang.String getReliabilityLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reliability_level ServiceFabricCluster#reliability_level}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#resource_group_name ServiceFabricCluster#resource_group_name}.

---

##### `upgradeMode`<sup>Required</sup> <a name="upgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradeMode"></a>

```java
public java.lang.String getUpgradeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_mode ServiceFabricCluster#upgrade_mode}.

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmImage"></a>

```java
public java.lang.String getVmImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vm_image ServiceFabricCluster#vm_image}.

---

##### `addOnFeatures`<sup>Optional</sup> <a name="addOnFeatures" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.addOnFeatures"></a>

```java
public java.util.List<java.lang.String> getAddOnFeatures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#add_on_features ServiceFabricCluster#add_on_features}.

---

##### `azureActiveDirectory`<sup>Optional</sup> <a name="azureActiveDirectory" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.azureActiveDirectory"></a>

```java
public ServiceFabricClusterAzureActiveDirectory getAzureActiveDirectory();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

azure_active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#azure_active_directory ServiceFabricCluster#azure_active_directory}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificate"></a>

```java
public ServiceFabricClusterCertificate getCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate ServiceFabricCluster#certificate}

---

##### `certificateCommonNames`<sup>Optional</sup> <a name="certificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.certificateCommonNames"></a>

```java
public ServiceFabricClusterCertificateCommonNames getCertificateCommonNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_common_names ServiceFabricCluster#certificate_common_names}

---

##### `clientCertificateCommonName`<sup>Optional</sup> <a name="clientCertificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateCommonName"></a>

```java
public java.lang.Object getClientCertificateCommonName();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>>

client_certificate_common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_certificate_common_name ServiceFabricCluster#client_certificate_common_name}

---

##### `clientCertificateThumbprint`<sup>Optional</sup> <a name="clientCertificateThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clientCertificateThumbprint"></a>

```java
public java.lang.Object getClientCertificateThumbprint();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>>

client_certificate_thumbprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_certificate_thumbprint ServiceFabricCluster#client_certificate_thumbprint}

---

##### `clusterCodeVersion`<sup>Optional</sup> <a name="clusterCodeVersion" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.clusterCodeVersion"></a>

```java
public java.lang.String getClusterCodeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#cluster_code_version ServiceFabricCluster#cluster_code_version}.

---

##### `diagnosticsConfig`<sup>Optional</sup> <a name="diagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.diagnosticsConfig"></a>

```java
public ServiceFabricClusterDiagnosticsConfig getDiagnosticsConfig();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

diagnostics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#diagnostics_config ServiceFabricCluster#diagnostics_config}

---

##### `fabricSettings`<sup>Optional</sup> <a name="fabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.fabricSettings"></a>

```java
public java.lang.Object getFabricSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>>

fabric_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#fabric_settings ServiceFabricCluster#fabric_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#id ServiceFabricCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reverseProxyCertificate`<sup>Optional</sup> <a name="reverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificate"></a>

```java
public ServiceFabricClusterReverseProxyCertificate getReverseProxyCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

reverse_proxy_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate ServiceFabricCluster#reverse_proxy_certificate}

---

##### `reverseProxyCertificateCommonNames`<sup>Optional</sup> <a name="reverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.reverseProxyCertificateCommonNames"></a>

```java
public ServiceFabricClusterReverseProxyCertificateCommonNames getReverseProxyCertificateCommonNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

reverse_proxy_certificate_common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reverse_proxy_certificate_common_names ServiceFabricCluster#reverse_proxy_certificate_common_names}

---

##### `serviceFabricZonalUpgradeMode`<sup>Optional</sup> <a name="serviceFabricZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.serviceFabricZonalUpgradeMode"></a>

```java
public java.lang.String getServiceFabricZonalUpgradeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#service_fabric_zonal_upgrade_mode ServiceFabricCluster#service_fabric_zonal_upgrade_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#tags ServiceFabricCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.timeouts"></a>

```java
public ServiceFabricClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#timeouts ServiceFabricCluster#timeouts}

---

##### `upgradePolicy`<sup>Optional</sup> <a name="upgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.upgradePolicy"></a>

```java
public ServiceFabricClusterUpgradePolicy getUpgradePolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

upgrade_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_policy ServiceFabricCluster#upgrade_policy}

---

##### `vmssZonalUpgradeMode`<sup>Optional</sup> <a name="vmssZonalUpgradeMode" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterConfig.property.vmssZonalUpgradeMode"></a>

```java
public java.lang.String getVmssZonalUpgradeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#vmss_zonal_upgrade_mode ServiceFabricCluster#vmss_zonal_upgrade_mode}.

---

### ServiceFabricClusterDiagnosticsConfig <a name="ServiceFabricClusterDiagnosticsConfig" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterDiagnosticsConfig;

ServiceFabricClusterDiagnosticsConfig.builder()
    .blobEndpoint(java.lang.String)
    .protectedAccountKeyName(java.lang.String)
    .queueEndpoint(java.lang.String)
    .storageAccountName(java.lang.String)
    .tableEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.blobEndpoint">blobEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#blob_endpoint ServiceFabricCluster#blob_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.protectedAccountKeyName">protectedAccountKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#protected_account_key_name ServiceFabricCluster#protected_account_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.queueEndpoint">queueEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#queue_endpoint ServiceFabricCluster#queue_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#storage_account_name ServiceFabricCluster#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.tableEndpoint">tableEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#table_endpoint ServiceFabricCluster#table_endpoint}. |

---

##### `blobEndpoint`<sup>Required</sup> <a name="blobEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.blobEndpoint"></a>

```java
public java.lang.String getBlobEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#blob_endpoint ServiceFabricCluster#blob_endpoint}.

---

##### `protectedAccountKeyName`<sup>Required</sup> <a name="protectedAccountKeyName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.protectedAccountKeyName"></a>

```java
public java.lang.String getProtectedAccountKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#protected_account_key_name ServiceFabricCluster#protected_account_key_name}.

---

##### `queueEndpoint`<sup>Required</sup> <a name="queueEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.queueEndpoint"></a>

```java
public java.lang.String getQueueEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#queue_endpoint ServiceFabricCluster#queue_endpoint}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#storage_account_name ServiceFabricCluster#storage_account_name}.

---

##### `tableEndpoint`<sup>Required</sup> <a name="tableEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig.property.tableEndpoint"></a>

```java
public java.lang.String getTableEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#table_endpoint ServiceFabricCluster#table_endpoint}.

---

### ServiceFabricClusterFabricSettings <a name="ServiceFabricClusterFabricSettings" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterFabricSettings;

ServiceFabricClusterFabricSettings.builder()
    .name(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#parameters ServiceFabricCluster#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#parameters ServiceFabricCluster#parameters}.

---

### ServiceFabricClusterNodeType <a name="ServiceFabricClusterNodeType" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterNodeType;

ServiceFabricClusterNodeType.builder()
    .clientEndpointPort(java.lang.Number)
    .httpEndpointPort(java.lang.Number)
    .instanceCount(java.lang.Number)
    .isPrimary(java.lang.Boolean)
    .isPrimary(IResolvable)
    .name(java.lang.String)
//  .applicationPorts(ServiceFabricClusterNodeTypeApplicationPorts)
//  .capacities(java.util.Map<java.lang.String, java.lang.String>)
//  .durabilityLevel(java.lang.String)
//  .ephemeralPorts(ServiceFabricClusterNodeTypeEphemeralPorts)
//  .isStateless(java.lang.Boolean)
//  .isStateless(IResolvable)
//  .multipleAvailabilityZones(java.lang.Boolean)
//  .multipleAvailabilityZones(IResolvable)
//  .placementProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .reverseProxyEndpointPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.clientEndpointPort">clientEndpointPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_endpoint_port ServiceFabricCluster#client_endpoint_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.httpEndpointPort">httpEndpointPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#http_endpoint_port ServiceFabricCluster#http_endpoint_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#instance_count ServiceFabricCluster#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_primary ServiceFabricCluster#is_primary}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.applicationPorts">applicationPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | application_ports block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.capacities">capacities</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#capacities ServiceFabricCluster#capacities}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.durabilityLevel">durabilityLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#durability_level ServiceFabricCluster#durability_level}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.ephemeralPorts">ephemeralPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | ephemeral_ports block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isStateless">isStateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_stateless ServiceFabricCluster#is_stateless}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.multipleAvailabilityZones">multipleAvailabilityZones</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.placementProperties">placementProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#placement_properties ServiceFabricCluster#placement_properties}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.reverseProxyEndpointPort">reverseProxyEndpointPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}. |

---

##### `clientEndpointPort`<sup>Required</sup> <a name="clientEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.clientEndpointPort"></a>

```java
public java.lang.Number getClientEndpointPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#client_endpoint_port ServiceFabricCluster#client_endpoint_port}.

---

##### `httpEndpointPort`<sup>Required</sup> <a name="httpEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.httpEndpointPort"></a>

```java
public java.lang.Number getHttpEndpointPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#http_endpoint_port ServiceFabricCluster#http_endpoint_port}.

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#instance_count ServiceFabricCluster#instance_count}.

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_primary ServiceFabricCluster#is_primary}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#name ServiceFabricCluster#name}.

---

##### `applicationPorts`<sup>Optional</sup> <a name="applicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.applicationPorts"></a>

```java
public ServiceFabricClusterNodeTypeApplicationPorts getApplicationPorts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

application_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#application_ports ServiceFabricCluster#application_ports}

---

##### `capacities`<sup>Optional</sup> <a name="capacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.capacities"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacities();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#capacities ServiceFabricCluster#capacities}.

---

##### `durabilityLevel`<sup>Optional</sup> <a name="durabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.durabilityLevel"></a>

```java
public java.lang.String getDurabilityLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#durability_level ServiceFabricCluster#durability_level}.

---

##### `ephemeralPorts`<sup>Optional</sup> <a name="ephemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.ephemeralPorts"></a>

```java
public ServiceFabricClusterNodeTypeEphemeralPorts getEphemeralPorts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

ephemeral_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#ephemeral_ports ServiceFabricCluster#ephemeral_ports}

---

##### `isStateless`<sup>Optional</sup> <a name="isStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.isStateless"></a>

```java
public java.lang.Object getIsStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#is_stateless ServiceFabricCluster#is_stateless}.

---

##### `multipleAvailabilityZones`<sup>Optional</sup> <a name="multipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.multipleAvailabilityZones"></a>

```java
public java.lang.Object getMultipleAvailabilityZones();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#multiple_availability_zones ServiceFabricCluster#multiple_availability_zones}.

---

##### `placementProperties`<sup>Optional</sup> <a name="placementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.placementProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPlacementProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#placement_properties ServiceFabricCluster#placement_properties}.

---

##### `reverseProxyEndpointPort`<sup>Optional</sup> <a name="reverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType.property.reverseProxyEndpointPort"></a>

```java
public java.lang.Number getReverseProxyEndpointPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#reverse_proxy_endpoint_port ServiceFabricCluster#reverse_proxy_endpoint_port}.

---

### ServiceFabricClusterNodeTypeApplicationPorts <a name="ServiceFabricClusterNodeTypeApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterNodeTypeApplicationPorts;

ServiceFabricClusterNodeTypeApplicationPorts.builder()
    .endPort(java.lang.Number)
    .startPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.endPort">endPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.startPort">startPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}. |

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.endPort"></a>

```java
public java.lang.Number getEndPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}.

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts.property.startPort"></a>

```java
public java.lang.Number getStartPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}.

---

### ServiceFabricClusterNodeTypeEphemeralPorts <a name="ServiceFabricClusterNodeTypeEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterNodeTypeEphemeralPorts;

ServiceFabricClusterNodeTypeEphemeralPorts.builder()
    .endPort(java.lang.Number)
    .startPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.endPort">endPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.startPort">startPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}. |

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.endPort"></a>

```java
public java.lang.Number getEndPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#end_port ServiceFabricCluster#end_port}.

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts.property.startPort"></a>

```java
public java.lang.Number getStartPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#start_port ServiceFabricCluster#start_port}.

---

### ServiceFabricClusterReverseProxyCertificate <a name="ServiceFabricClusterReverseProxyCertificate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterReverseProxyCertificate;

ServiceFabricClusterReverseProxyCertificate.builder()
    .thumbprint(java.lang.String)
    .x509StoreName(java.lang.String)
//  .thumbprintSecondary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}. |

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint ServiceFabricCluster#thumbprint}.

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

##### `thumbprintSecondary`<sup>Optional</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate.property.thumbprintSecondary"></a>

```java
public java.lang.String getThumbprintSecondary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#thumbprint_secondary ServiceFabricCluster#thumbprint_secondary}.

---

### ServiceFabricClusterReverseProxyCertificateCommonNames <a name="ServiceFabricClusterReverseProxyCertificateCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterReverseProxyCertificateCommonNames;

ServiceFabricClusterReverseProxyCertificateCommonNames.builder()
    .commonNames(IResolvable)
    .commonNames(java.util.List<ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames>)
    .x509StoreName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.commonNames">commonNames</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>></code> | common_names block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}. |

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.commonNames"></a>

```java
public java.lang.Object getCommonNames();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>>

common_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#common_names ServiceFabricCluster#common_names}

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#x509_store_name ServiceFabricCluster#x509_store_name}.

---

### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames;

ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.builder()
    .certificateCommonName(java.lang.String)
//  .certificateIssuerThumbprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateCommonName">certificateCommonName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}. |

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateCommonName"></a>

```java
public java.lang.String getCertificateCommonName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_common_name ServiceFabricCluster#certificate_common_name}.

---

##### `certificateIssuerThumbprint`<sup>Optional</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames.property.certificateIssuerThumbprint"></a>

```java
public java.lang.String getCertificateIssuerThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#certificate_issuer_thumbprint ServiceFabricCluster#certificate_issuer_thumbprint}.

---

### ServiceFabricClusterTimeouts <a name="ServiceFabricClusterTimeouts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterTimeouts;

ServiceFabricClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#create ServiceFabricCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#delete ServiceFabricCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#read ServiceFabricCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#update ServiceFabricCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#create ServiceFabricCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#delete ServiceFabricCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#read ServiceFabricCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#update ServiceFabricCluster#update}.

---

### ServiceFabricClusterUpgradePolicy <a name="ServiceFabricClusterUpgradePolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterUpgradePolicy;

ServiceFabricClusterUpgradePolicy.builder()
//  .deltaHealthPolicy(ServiceFabricClusterUpgradePolicyDeltaHealthPolicy)
//  .forceRestartEnabled(java.lang.Boolean)
//  .forceRestartEnabled(IResolvable)
//  .healthCheckRetryTimeout(java.lang.String)
//  .healthCheckStableDuration(java.lang.String)
//  .healthCheckWaitDuration(java.lang.String)
//  .healthPolicy(ServiceFabricClusterUpgradePolicyHealthPolicy)
//  .upgradeDomainTimeout(java.lang.String)
//  .upgradeReplicaSetCheckTimeout(java.lang.String)
//  .upgradeTimeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.deltaHealthPolicy">deltaHealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | delta_health_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.forceRestartEnabled">forceRestartEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#force_restart_enabled ServiceFabricCluster#force_restart_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckRetryTimeout">healthCheckRetryTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckStableDuration">healthCheckStableDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckWaitDuration">healthCheckWaitDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthPolicy">healthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | health_policy block. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeDomainTimeout">upgradeDomainTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeReplicaSetCheckTimeout">upgradeReplicaSetCheckTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeTimeout">upgradeTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_timeout ServiceFabricCluster#upgrade_timeout}. |

---

##### `deltaHealthPolicy`<sup>Optional</sup> <a name="deltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.deltaHealthPolicy"></a>

```java
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicy getDeltaHealthPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

delta_health_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#delta_health_policy ServiceFabricCluster#delta_health_policy}

---

##### `forceRestartEnabled`<sup>Optional</sup> <a name="forceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.forceRestartEnabled"></a>

```java
public java.lang.Object getForceRestartEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#force_restart_enabled ServiceFabricCluster#force_restart_enabled}.

---

##### `healthCheckRetryTimeout`<sup>Optional</sup> <a name="healthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckRetryTimeout"></a>

```java
public java.lang.String getHealthCheckRetryTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#health_check_retry_timeout ServiceFabricCluster#health_check_retry_timeout}.

---

##### `healthCheckStableDuration`<sup>Optional</sup> <a name="healthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckStableDuration"></a>

```java
public java.lang.String getHealthCheckStableDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#health_check_stable_duration ServiceFabricCluster#health_check_stable_duration}.

---

##### `healthCheckWaitDuration`<sup>Optional</sup> <a name="healthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthCheckWaitDuration"></a>

```java
public java.lang.String getHealthCheckWaitDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#health_check_wait_duration ServiceFabricCluster#health_check_wait_duration}.

---

##### `healthPolicy`<sup>Optional</sup> <a name="healthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.healthPolicy"></a>

```java
public ServiceFabricClusterUpgradePolicyHealthPolicy getHealthPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

health_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#health_policy ServiceFabricCluster#health_policy}

---

##### `upgradeDomainTimeout`<sup>Optional</sup> <a name="upgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeDomainTimeout"></a>

```java
public java.lang.String getUpgradeDomainTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_domain_timeout ServiceFabricCluster#upgrade_domain_timeout}.

---

##### `upgradeReplicaSetCheckTimeout`<sup>Optional</sup> <a name="upgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeReplicaSetCheckTimeout"></a>

```java
public java.lang.String getUpgradeReplicaSetCheckTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_replica_set_check_timeout ServiceFabricCluster#upgrade_replica_set_check_timeout}.

---

##### `upgradeTimeout`<sup>Optional</sup> <a name="upgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy.property.upgradeTimeout"></a>

```java
public java.lang.String getUpgradeTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#upgrade_timeout ServiceFabricCluster#upgrade_timeout}.

---

### ServiceFabricClusterUpgradePolicyDeltaHealthPolicy <a name="ServiceFabricClusterUpgradePolicyDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy;

ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.builder()
//  .maxDeltaUnhealthyApplicationsPercent(java.lang.Number)
//  .maxDeltaUnhealthyNodesPercent(java.lang.Number)
//  .maxUpgradeDomainDeltaUnhealthyNodesPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyApplicationsPercent">maxDeltaUnhealthyApplicationsPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyNodesPercent">maxDeltaUnhealthyNodesPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxUpgradeDomainDeltaUnhealthyNodesPercent">maxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}. |

---

##### `maxDeltaUnhealthyApplicationsPercent`<sup>Optional</sup> <a name="maxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyApplicationsPercent"></a>

```java
public java.lang.Number getMaxDeltaUnhealthyApplicationsPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_applications_percent ServiceFabricCluster#max_delta_unhealthy_applications_percent}.

---

##### `maxDeltaUnhealthyNodesPercent`<sup>Optional</sup> <a name="maxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxDeltaUnhealthyNodesPercent"></a>

```java
public java.lang.Number getMaxDeltaUnhealthyNodesPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_delta_unhealthy_nodes_percent ServiceFabricCluster#max_delta_unhealthy_nodes_percent}.

---

##### `maxUpgradeDomainDeltaUnhealthyNodesPercent`<sup>Optional</sup> <a name="maxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy.property.maxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```java
public java.lang.Number getMaxUpgradeDomainDeltaUnhealthyNodesPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_upgrade_domain_delta_unhealthy_nodes_percent ServiceFabricCluster#max_upgrade_domain_delta_unhealthy_nodes_percent}.

---

### ServiceFabricClusterUpgradePolicyHealthPolicy <a name="ServiceFabricClusterUpgradePolicyHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterUpgradePolicyHealthPolicy;

ServiceFabricClusterUpgradePolicyHealthPolicy.builder()
//  .maxUnhealthyApplicationsPercent(java.lang.Number)
//  .maxUnhealthyNodesPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyApplicationsPercent">maxUnhealthyApplicationsPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyNodesPercent">maxUnhealthyNodesPercent</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}. |

---

##### `maxUnhealthyApplicationsPercent`<sup>Optional</sup> <a name="maxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyApplicationsPercent"></a>

```java
public java.lang.Number getMaxUnhealthyApplicationsPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_unhealthy_applications_percent ServiceFabricCluster#max_unhealthy_applications_percent}.

---

##### `maxUnhealthyNodesPercent`<sup>Optional</sup> <a name="maxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy.property.maxUnhealthyNodesPercent"></a>

```java
public java.lang.Number getMaxUnhealthyNodesPercent();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/service_fabric_cluster#max_unhealthy_nodes_percent ServiceFabricCluster#max_unhealthy_nodes_percent}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceFabricClusterAzureActiveDirectoryOutputReference <a name="ServiceFabricClusterAzureActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterAzureActiveDirectoryOutputReference;

new ServiceFabricClusterAzureActiveDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationIdInput">clientApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationIdInput">clusterApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationId">clientApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationId">clusterApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientApplicationIdInput`<sup>Optional</sup> <a name="clientApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationIdInput"></a>

```java
public java.lang.String getClientApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `clusterApplicationIdInput`<sup>Optional</sup> <a name="clusterApplicationIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationIdInput"></a>

```java
public java.lang.String getClusterApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `clientApplicationId`<sup>Required</sup> <a name="clientApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clientApplicationId"></a>

```java
public java.lang.String getClientApplicationId();
```

- *Type:* java.lang.String

---

##### `clusterApplicationId`<sup>Required</sup> <a name="clusterApplicationId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.clusterApplicationId"></a>

```java
public java.lang.String getClusterApplicationId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectoryOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterAzureActiveDirectory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterAzureActiveDirectory">ServiceFabricClusterAzureActiveDirectory</a>

---


### ServiceFabricClusterCertificateCommonNamesCommonNamesList <a name="ServiceFabricClusterCertificateCommonNamesCommonNamesList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList;

new ServiceFabricClusterCertificateCommonNamesCommonNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get"></a>

```java
public ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>>

---


### ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference <a name="ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference;

new ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint">resetCertificateIssuerThumbprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIssuerThumbprint` <a name="resetCertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint"></a>

```java
public void resetCertificateIssuerThumbprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput">certificateCommonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput">certificateIssuerThumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName">certificateCommonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateCommonNameInput`<sup>Optional</sup> <a name="certificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput"></a>

```java
public java.lang.String getCertificateCommonNameInput();
```

- *Type:* java.lang.String

---

##### `certificateIssuerThumbprintInput`<sup>Optional</sup> <a name="certificateIssuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput"></a>

```java
public java.lang.String getCertificateIssuerThumbprintInput();
```

- *Type:* java.lang.String

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName"></a>

```java
public java.lang.String getCertificateCommonName();
```

- *Type:* java.lang.String

---

##### `certificateIssuerThumbprint`<sup>Required</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint"></a>

```java
public java.lang.String getCertificateIssuerThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>

---


### ServiceFabricClusterCertificateCommonNamesOutputReference <a name="ServiceFabricClusterCertificateCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterCertificateCommonNamesOutputReference;

new ServiceFabricClusterCertificateCommonNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames">putCommonNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommonNames` <a name="putCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames"></a>

```java
public void putCommonNames(IResolvable OR java.util.List<ServiceFabricClusterCertificateCommonNamesCommonNames> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.putCommonNames.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNames">commonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList">ServiceFabricClusterCertificateCommonNamesCommonNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNames"></a>

```java
public ServiceFabricClusterCertificateCommonNamesCommonNamesList getCommonNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNamesList">ServiceFabricClusterCertificateCommonNamesCommonNamesList</a>

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.commonNamesInput"></a>

```java
public java.lang.Object getCommonNamesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesCommonNames">ServiceFabricClusterCertificateCommonNamesCommonNames</a>>

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreNameInput"></a>

```java
public java.lang.String getX509StoreNameInput();
```

- *Type:* java.lang.String

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNamesOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterCertificateCommonNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateCommonNames">ServiceFabricClusterCertificateCommonNames</a>

---


### ServiceFabricClusterCertificateOutputReference <a name="ServiceFabricClusterCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterCertificateOutputReference;

new ServiceFabricClusterCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resetThumbprintSecondary">resetThumbprintSecondary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThumbprintSecondary` <a name="resetThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.resetThumbprintSecondary"></a>

```java
public void resetThumbprintSecondary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondaryInput">thumbprintSecondaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `thumbprintSecondaryInput`<sup>Optional</sup> <a name="thumbprintSecondaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondaryInput"></a>

```java
public java.lang.String getThumbprintSecondaryInput();
```

- *Type:* java.lang.String

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreNameInput"></a>

```java
public java.lang.String getX509StoreNameInput();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `thumbprintSecondary`<sup>Required</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.thumbprintSecondary"></a>

```java
public java.lang.String getThumbprintSecondary();
```

- *Type:* java.lang.String

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificateOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterCertificate">ServiceFabricClusterCertificate</a>

---


### ServiceFabricClusterClientCertificateCommonNameList <a name="ServiceFabricClusterClientCertificateCommonNameList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterClientCertificateCommonNameList;

new ServiceFabricClusterClientCertificateCommonNameList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get"></a>

```java
public ServiceFabricClusterClientCertificateCommonNameOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>>

---


### ServiceFabricClusterClientCertificateCommonNameOutputReference <a name="ServiceFabricClusterClientCertificateCommonNameOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterClientCertificateCommonNameOutputReference;

new ServiceFabricClusterClientCertificateCommonNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resetIssuerThumbprint">resetIssuerThumbprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIssuerThumbprint` <a name="resetIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.resetIssuerThumbprint"></a>

```java
public void resetIssuerThumbprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdminInput">isAdminInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprintInput">issuerThumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdmin">isAdmin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprint">issuerThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `isAdminInput`<sup>Optional</sup> <a name="isAdminInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdminInput"></a>

```java
public java.lang.Object getIsAdminInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuerThumbprintInput`<sup>Optional</sup> <a name="issuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprintInput"></a>

```java
public java.lang.String getIssuerThumbprintInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.isAdmin"></a>

```java
public java.lang.Object getIsAdmin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuerThumbprint`<sup>Required</sup> <a name="issuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.issuerThumbprint"></a>

```java
public java.lang.String getIssuerThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonNameOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateCommonName">ServiceFabricClusterClientCertificateCommonName</a>

---


### ServiceFabricClusterClientCertificateThumbprintList <a name="ServiceFabricClusterClientCertificateThumbprintList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterClientCertificateThumbprintList;

new ServiceFabricClusterClientCertificateThumbprintList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get"></a>

```java
public ServiceFabricClusterClientCertificateThumbprintOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>>

---


### ServiceFabricClusterClientCertificateThumbprintOutputReference <a name="ServiceFabricClusterClientCertificateThumbprintOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterClientCertificateThumbprintOutputReference;

new ServiceFabricClusterClientCertificateThumbprintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdminInput">isAdminInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdmin">isAdmin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isAdminInput`<sup>Optional</sup> <a name="isAdminInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdminInput"></a>

```java
public java.lang.Object getIsAdminInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `isAdmin`<sup>Required</sup> <a name="isAdmin" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.isAdmin"></a>

```java
public java.lang.Object getIsAdmin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprintOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterClientCertificateThumbprint">ServiceFabricClusterClientCertificateThumbprint</a>

---


### ServiceFabricClusterDiagnosticsConfigOutputReference <a name="ServiceFabricClusterDiagnosticsConfigOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterDiagnosticsConfigOutputReference;

new ServiceFabricClusterDiagnosticsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpointInput">blobEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyNameInput">protectedAccountKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpointInput">queueEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpointInput">tableEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpoint">blobEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyName">protectedAccountKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpoint">queueEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpoint">tableEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blobEndpointInput`<sup>Optional</sup> <a name="blobEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpointInput"></a>

```java
public java.lang.String getBlobEndpointInput();
```

- *Type:* java.lang.String

---

##### `protectedAccountKeyNameInput`<sup>Optional</sup> <a name="protectedAccountKeyNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyNameInput"></a>

```java
public java.lang.String getProtectedAccountKeyNameInput();
```

- *Type:* java.lang.String

---

##### `queueEndpointInput`<sup>Optional</sup> <a name="queueEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpointInput"></a>

```java
public java.lang.String getQueueEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tableEndpointInput`<sup>Optional</sup> <a name="tableEndpointInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpointInput"></a>

```java
public java.lang.String getTableEndpointInput();
```

- *Type:* java.lang.String

---

##### `blobEndpoint`<sup>Required</sup> <a name="blobEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.blobEndpoint"></a>

```java
public java.lang.String getBlobEndpoint();
```

- *Type:* java.lang.String

---

##### `protectedAccountKeyName`<sup>Required</sup> <a name="protectedAccountKeyName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.protectedAccountKeyName"></a>

```java
public java.lang.String getProtectedAccountKeyName();
```

- *Type:* java.lang.String

---

##### `queueEndpoint`<sup>Required</sup> <a name="queueEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.queueEndpoint"></a>

```java
public java.lang.String getQueueEndpoint();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `tableEndpoint`<sup>Required</sup> <a name="tableEndpoint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.tableEndpoint"></a>

```java
public java.lang.String getTableEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfigOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterDiagnosticsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterDiagnosticsConfig">ServiceFabricClusterDiagnosticsConfig</a>

---


### ServiceFabricClusterFabricSettingsList <a name="ServiceFabricClusterFabricSettingsList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterFabricSettingsList;

new ServiceFabricClusterFabricSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get"></a>

```java
public ServiceFabricClusterFabricSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>>

---


### ServiceFabricClusterFabricSettingsOutputReference <a name="ServiceFabricClusterFabricSettingsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterFabricSettingsOutputReference;

new ServiceFabricClusterFabricSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterFabricSettings">ServiceFabricClusterFabricSettings</a>

---


### ServiceFabricClusterNodeTypeApplicationPortsOutputReference <a name="ServiceFabricClusterNodeTypeApplicationPortsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference;

new ServiceFabricClusterNodeTypeApplicationPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPortInput">endPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPortInput">startPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPort">endPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPort">startPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endPortInput`<sup>Optional</sup> <a name="endPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPortInput"></a>

```java
public java.lang.Number getEndPortInput();
```

- *Type:* java.lang.Number

---

##### `startPortInput`<sup>Optional</sup> <a name="startPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPortInput"></a>

```java
public java.lang.Number getStartPortInput();
```

- *Type:* java.lang.Number

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.endPort"></a>

```java
public java.lang.Number getEndPort();
```

- *Type:* java.lang.Number

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.startPort"></a>

```java
public java.lang.Number getStartPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterNodeTypeApplicationPorts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---


### ServiceFabricClusterNodeTypeEphemeralPortsOutputReference <a name="ServiceFabricClusterNodeTypeEphemeralPortsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference;

new ServiceFabricClusterNodeTypeEphemeralPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPortInput">endPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPortInput">startPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPort">endPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPort">startPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endPortInput`<sup>Optional</sup> <a name="endPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPortInput"></a>

```java
public java.lang.Number getEndPortInput();
```

- *Type:* java.lang.Number

---

##### `startPortInput`<sup>Optional</sup> <a name="startPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPortInput"></a>

```java
public java.lang.Number getStartPortInput();
```

- *Type:* java.lang.Number

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.endPort"></a>

```java
public java.lang.Number getEndPort();
```

- *Type:* java.lang.Number

---

##### `startPort`<sup>Required</sup> <a name="startPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.startPort"></a>

```java
public java.lang.Number getStartPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterNodeTypeEphemeralPorts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---


### ServiceFabricClusterNodeTypeList <a name="ServiceFabricClusterNodeTypeList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterNodeTypeList;

new ServiceFabricClusterNodeTypeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get"></a>

```java
public ServiceFabricClusterNodeTypeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>>

---


### ServiceFabricClusterNodeTypeOutputReference <a name="ServiceFabricClusterNodeTypeOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterNodeTypeOutputReference;

new ServiceFabricClusterNodeTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts">putApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts">putEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetApplicationPorts">resetApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetCapacities">resetCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetDurabilityLevel">resetDurabilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetEphemeralPorts">resetEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetIsStateless">resetIsStateless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetMultipleAvailabilityZones">resetMultipleAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetPlacementProperties">resetPlacementProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetReverseProxyEndpointPort">resetReverseProxyEndpointPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationPorts` <a name="putApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts"></a>

```java
public void putApplicationPorts(ServiceFabricClusterNodeTypeApplicationPorts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putApplicationPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---

##### `putEphemeralPorts` <a name="putEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts"></a>

```java
public void putEphemeralPorts(ServiceFabricClusterNodeTypeEphemeralPorts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.putEphemeralPorts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---

##### `resetApplicationPorts` <a name="resetApplicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetApplicationPorts"></a>

```java
public void resetApplicationPorts()
```

##### `resetCapacities` <a name="resetCapacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetCapacities"></a>

```java
public void resetCapacities()
```

##### `resetDurabilityLevel` <a name="resetDurabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetDurabilityLevel"></a>

```java
public void resetDurabilityLevel()
```

##### `resetEphemeralPorts` <a name="resetEphemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetEphemeralPorts"></a>

```java
public void resetEphemeralPorts()
```

##### `resetIsStateless` <a name="resetIsStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetIsStateless"></a>

```java
public void resetIsStateless()
```

##### `resetMultipleAvailabilityZones` <a name="resetMultipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetMultipleAvailabilityZones"></a>

```java
public void resetMultipleAvailabilityZones()
```

##### `resetPlacementProperties` <a name="resetPlacementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetPlacementProperties"></a>

```java
public void resetPlacementProperties()
```

##### `resetReverseProxyEndpointPort` <a name="resetReverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.resetReverseProxyEndpointPort"></a>

```java
public void resetReverseProxyEndpointPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPorts">applicationPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference">ServiceFabricClusterNodeTypeApplicationPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPorts">ephemeralPorts</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference">ServiceFabricClusterNodeTypeEphemeralPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPortsInput">applicationPortsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacitiesInput">capacitiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPortInput">clientEndpointPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevelInput">durabilityLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPortsInput">ephemeralPortsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPortInput">httpEndpointPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStatelessInput">isStatelessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZonesInput">multipleAvailabilityZonesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementPropertiesInput">placementPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPortInput">reverseProxyEndpointPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacities">capacities</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPort">clientEndpointPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevel">durabilityLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPort">httpEndpointPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStateless">isStateless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZones">multipleAvailabilityZones</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementProperties">placementProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPort">reverseProxyEndpointPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationPorts`<sup>Required</sup> <a name="applicationPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPorts"></a>

```java
public ServiceFabricClusterNodeTypeApplicationPortsOutputReference getApplicationPorts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPortsOutputReference">ServiceFabricClusterNodeTypeApplicationPortsOutputReference</a>

---

##### `ephemeralPorts`<sup>Required</sup> <a name="ephemeralPorts" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPorts"></a>

```java
public ServiceFabricClusterNodeTypeEphemeralPortsOutputReference getEphemeralPorts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPortsOutputReference">ServiceFabricClusterNodeTypeEphemeralPortsOutputReference</a>

---

##### `applicationPortsInput`<sup>Optional</sup> <a name="applicationPortsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.applicationPortsInput"></a>

```java
public ServiceFabricClusterNodeTypeApplicationPorts getApplicationPortsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeApplicationPorts">ServiceFabricClusterNodeTypeApplicationPorts</a>

---

##### `capacitiesInput`<sup>Optional</sup> <a name="capacitiesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacitiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacitiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientEndpointPortInput`<sup>Optional</sup> <a name="clientEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPortInput"></a>

```java
public java.lang.Number getClientEndpointPortInput();
```

- *Type:* java.lang.Number

---

##### `durabilityLevelInput`<sup>Optional</sup> <a name="durabilityLevelInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevelInput"></a>

```java
public java.lang.String getDurabilityLevelInput();
```

- *Type:* java.lang.String

---

##### `ephemeralPortsInput`<sup>Optional</sup> <a name="ephemeralPortsInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.ephemeralPortsInput"></a>

```java
public ServiceFabricClusterNodeTypeEphemeralPorts getEphemeralPortsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeEphemeralPorts">ServiceFabricClusterNodeTypeEphemeralPorts</a>

---

##### `httpEndpointPortInput`<sup>Optional</sup> <a name="httpEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPortInput"></a>

```java
public java.lang.Number getHttpEndpointPortInput();
```

- *Type:* java.lang.Number

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimaryInput"></a>

```java
public java.lang.Object getIsPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isStatelessInput`<sup>Optional</sup> <a name="isStatelessInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStatelessInput"></a>

```java
public java.lang.Object getIsStatelessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `multipleAvailabilityZonesInput`<sup>Optional</sup> <a name="multipleAvailabilityZonesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZonesInput"></a>

```java
public java.lang.Object getMultipleAvailabilityZonesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `placementPropertiesInput`<sup>Optional</sup> <a name="placementPropertiesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPlacementPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `reverseProxyEndpointPortInput`<sup>Optional</sup> <a name="reverseProxyEndpointPortInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPortInput"></a>

```java
public java.lang.Number getReverseProxyEndpointPortInput();
```

- *Type:* java.lang.Number

---

##### `capacities`<sup>Required</sup> <a name="capacities" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.capacities"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacities();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `clientEndpointPort`<sup>Required</sup> <a name="clientEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.clientEndpointPort"></a>

```java
public java.lang.Number getClientEndpointPort();
```

- *Type:* java.lang.Number

---

##### `durabilityLevel`<sup>Required</sup> <a name="durabilityLevel" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.durabilityLevel"></a>

```java
public java.lang.String getDurabilityLevel();
```

- *Type:* java.lang.String

---

##### `httpEndpointPort`<sup>Required</sup> <a name="httpEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.httpEndpointPort"></a>

```java
public java.lang.Number getHttpEndpointPort();
```

- *Type:* java.lang.Number

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isStateless`<sup>Required</sup> <a name="isStateless" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.isStateless"></a>

```java
public java.lang.Object getIsStateless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `multipleAvailabilityZones`<sup>Required</sup> <a name="multipleAvailabilityZones" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.multipleAvailabilityZones"></a>

```java
public java.lang.Object getMultipleAvailabilityZones();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `placementProperties`<sup>Required</sup> <a name="placementProperties" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.placementProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPlacementProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `reverseProxyEndpointPort`<sup>Required</sup> <a name="reverseProxyEndpointPort" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.reverseProxyEndpointPort"></a>

```java
public java.lang.Number getReverseProxyEndpointPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeTypeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterNodeType">ServiceFabricClusterNodeType</a>

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList;

new ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get"></a>

```java
public ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>>

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference;

new ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint">resetCertificateIssuerThumbprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIssuerThumbprint` <a name="resetCertificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.resetCertificateIssuerThumbprint"></a>

```java
public void resetCertificateIssuerThumbprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput">certificateCommonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput">certificateIssuerThumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName">certificateCommonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint">certificateIssuerThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateCommonNameInput`<sup>Optional</sup> <a name="certificateCommonNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonNameInput"></a>

```java
public java.lang.String getCertificateCommonNameInput();
```

- *Type:* java.lang.String

---

##### `certificateIssuerThumbprintInput`<sup>Optional</sup> <a name="certificateIssuerThumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprintInput"></a>

```java
public java.lang.String getCertificateIssuerThumbprintInput();
```

- *Type:* java.lang.String

---

##### `certificateCommonName`<sup>Required</sup> <a name="certificateCommonName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateCommonName"></a>

```java
public java.lang.String getCertificateCommonName();
```

- *Type:* java.lang.String

---

##### `certificateIssuerThumbprint`<sup>Required</sup> <a name="certificateIssuerThumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.certificateIssuerThumbprint"></a>

```java
public java.lang.String getCertificateIssuerThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>

---


### ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference <a name="ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference;

new ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames">putCommonNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommonNames` <a name="putCommonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames"></a>

```java
public void putCommonNames(IResolvable OR java.util.List<ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.putCommonNames.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNames">commonNames</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNamesInput">commonNamesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNames`<sup>Required</sup> <a name="commonNames" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNames"></a>

```java
public ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList getCommonNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNamesList</a>

---

##### `commonNamesInput`<sup>Optional</sup> <a name="commonNamesInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.commonNamesInput"></a>

```java
public java.lang.Object getCommonNamesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNamesCommonNames</a>>

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreNameInput"></a>

```java
public java.lang.String getX509StoreNameInput();
```

- *Type:* java.lang.String

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNamesOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterReverseProxyCertificateCommonNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateCommonNames">ServiceFabricClusterReverseProxyCertificateCommonNames</a>

---


### ServiceFabricClusterReverseProxyCertificateOutputReference <a name="ServiceFabricClusterReverseProxyCertificateOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterReverseProxyCertificateOutputReference;

new ServiceFabricClusterReverseProxyCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resetThumbprintSecondary">resetThumbprintSecondary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThumbprintSecondary` <a name="resetThumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.resetThumbprintSecondary"></a>

```java
public void resetThumbprintSecondary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondaryInput">thumbprintSecondaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreNameInput">x509StoreNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondary">thumbprintSecondary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreName">x509StoreName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `thumbprintSecondaryInput`<sup>Optional</sup> <a name="thumbprintSecondaryInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondaryInput"></a>

```java
public java.lang.String getThumbprintSecondaryInput();
```

- *Type:* java.lang.String

---

##### `x509StoreNameInput`<sup>Optional</sup> <a name="x509StoreNameInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreNameInput"></a>

```java
public java.lang.String getX509StoreNameInput();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `thumbprintSecondary`<sup>Required</sup> <a name="thumbprintSecondary" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.thumbprintSecondary"></a>

```java
public java.lang.String getThumbprintSecondary();
```

- *Type:* java.lang.String

---

##### `x509StoreName`<sup>Required</sup> <a name="x509StoreName" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.x509StoreName"></a>

```java
public java.lang.String getX509StoreName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificateOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterReverseProxyCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterReverseProxyCertificate">ServiceFabricClusterReverseProxyCertificate</a>

---


### ServiceFabricClusterTimeoutsOutputReference <a name="ServiceFabricClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterTimeoutsOutputReference;

new ServiceFabricClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterTimeouts">ServiceFabricClusterTimeouts</a>

---


### ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference;

new ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyApplicationsPercent">resetMaxDeltaUnhealthyApplicationsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyNodesPercent">resetMaxDeltaUnhealthyNodesPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxUpgradeDomainDeltaUnhealthyNodesPercent">resetMaxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDeltaUnhealthyApplicationsPercent` <a name="resetMaxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyApplicationsPercent"></a>

```java
public void resetMaxDeltaUnhealthyApplicationsPercent()
```

##### `resetMaxDeltaUnhealthyNodesPercent` <a name="resetMaxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxDeltaUnhealthyNodesPercent"></a>

```java
public void resetMaxDeltaUnhealthyNodesPercent()
```

##### `resetMaxUpgradeDomainDeltaUnhealthyNodesPercent` <a name="resetMaxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.resetMaxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```java
public void resetMaxUpgradeDomainDeltaUnhealthyNodesPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercentInput">maxDeltaUnhealthyApplicationsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercentInput">maxDeltaUnhealthyNodesPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercentInput">maxUpgradeDomainDeltaUnhealthyNodesPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercent">maxDeltaUnhealthyApplicationsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercent">maxDeltaUnhealthyNodesPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercent">maxUpgradeDomainDeltaUnhealthyNodesPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDeltaUnhealthyApplicationsPercentInput`<sup>Optional</sup> <a name="maxDeltaUnhealthyApplicationsPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercentInput"></a>

```java
public java.lang.Number getMaxDeltaUnhealthyApplicationsPercentInput();
```

- *Type:* java.lang.Number

---

##### `maxDeltaUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="maxDeltaUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercentInput"></a>

```java
public java.lang.Number getMaxDeltaUnhealthyNodesPercentInput();
```

- *Type:* java.lang.Number

---

##### `maxUpgradeDomainDeltaUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="maxUpgradeDomainDeltaUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercentInput"></a>

```java
public java.lang.Number getMaxUpgradeDomainDeltaUnhealthyNodesPercentInput();
```

- *Type:* java.lang.Number

---

##### `maxDeltaUnhealthyApplicationsPercent`<sup>Required</sup> <a name="maxDeltaUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyApplicationsPercent"></a>

```java
public java.lang.Number getMaxDeltaUnhealthyApplicationsPercent();
```

- *Type:* java.lang.Number

---

##### `maxDeltaUnhealthyNodesPercent`<sup>Required</sup> <a name="maxDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxDeltaUnhealthyNodesPercent"></a>

```java
public java.lang.Number getMaxDeltaUnhealthyNodesPercent();
```

- *Type:* java.lang.Number

---

##### `maxUpgradeDomainDeltaUnhealthyNodesPercent`<sup>Required</sup> <a name="maxUpgradeDomainDeltaUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.maxUpgradeDomainDeltaUnhealthyNodesPercent"></a>

```java
public java.lang.Number getMaxUpgradeDomainDeltaUnhealthyNodesPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---


### ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference;

new ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyApplicationsPercent">resetMaxUnhealthyApplicationsPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyNodesPercent">resetMaxUnhealthyNodesPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxUnhealthyApplicationsPercent` <a name="resetMaxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyApplicationsPercent"></a>

```java
public void resetMaxUnhealthyApplicationsPercent()
```

##### `resetMaxUnhealthyNodesPercent` <a name="resetMaxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.resetMaxUnhealthyNodesPercent"></a>

```java
public void resetMaxUnhealthyNodesPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercentInput">maxUnhealthyApplicationsPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercentInput">maxUnhealthyNodesPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercent">maxUnhealthyApplicationsPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercent">maxUnhealthyNodesPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxUnhealthyApplicationsPercentInput`<sup>Optional</sup> <a name="maxUnhealthyApplicationsPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercentInput"></a>

```java
public java.lang.Number getMaxUnhealthyApplicationsPercentInput();
```

- *Type:* java.lang.Number

---

##### `maxUnhealthyNodesPercentInput`<sup>Optional</sup> <a name="maxUnhealthyNodesPercentInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercentInput"></a>

```java
public java.lang.Number getMaxUnhealthyNodesPercentInput();
```

- *Type:* java.lang.Number

---

##### `maxUnhealthyApplicationsPercent`<sup>Required</sup> <a name="maxUnhealthyApplicationsPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyApplicationsPercent"></a>

```java
public java.lang.Number getMaxUnhealthyApplicationsPercent();
```

- *Type:* java.lang.Number

---

##### `maxUnhealthyNodesPercent`<sup>Required</sup> <a name="maxUnhealthyNodesPercent" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.maxUnhealthyNodesPercent"></a>

```java
public java.lang.Number getMaxUnhealthyNodesPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterUpgradePolicyHealthPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---


### ServiceFabricClusterUpgradePolicyOutputReference <a name="ServiceFabricClusterUpgradePolicyOutputReference" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.service_fabric_cluster.ServiceFabricClusterUpgradePolicyOutputReference;

new ServiceFabricClusterUpgradePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy">putDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy">putHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetDeltaHealthPolicy">resetDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetForceRestartEnabled">resetForceRestartEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckRetryTimeout">resetHealthCheckRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckStableDuration">resetHealthCheckStableDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckWaitDuration">resetHealthCheckWaitDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthPolicy">resetHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeDomainTimeout">resetUpgradeDomainTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeReplicaSetCheckTimeout">resetUpgradeReplicaSetCheckTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeTimeout">resetUpgradeTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaHealthPolicy` <a name="putDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy"></a>

```java
public void putDeltaHealthPolicy(ServiceFabricClusterUpgradePolicyDeltaHealthPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putDeltaHealthPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---

##### `putHealthPolicy` <a name="putHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy"></a>

```java
public void putHealthPolicy(ServiceFabricClusterUpgradePolicyHealthPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.putHealthPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---

##### `resetDeltaHealthPolicy` <a name="resetDeltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetDeltaHealthPolicy"></a>

```java
public void resetDeltaHealthPolicy()
```

##### `resetForceRestartEnabled` <a name="resetForceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetForceRestartEnabled"></a>

```java
public void resetForceRestartEnabled()
```

##### `resetHealthCheckRetryTimeout` <a name="resetHealthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckRetryTimeout"></a>

```java
public void resetHealthCheckRetryTimeout()
```

##### `resetHealthCheckStableDuration` <a name="resetHealthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckStableDuration"></a>

```java
public void resetHealthCheckStableDuration()
```

##### `resetHealthCheckWaitDuration` <a name="resetHealthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthCheckWaitDuration"></a>

```java
public void resetHealthCheckWaitDuration()
```

##### `resetHealthPolicy` <a name="resetHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetHealthPolicy"></a>

```java
public void resetHealthPolicy()
```

##### `resetUpgradeDomainTimeout` <a name="resetUpgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeDomainTimeout"></a>

```java
public void resetUpgradeDomainTimeout()
```

##### `resetUpgradeReplicaSetCheckTimeout` <a name="resetUpgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeReplicaSetCheckTimeout"></a>

```java
public void resetUpgradeReplicaSetCheckTimeout()
```

##### `resetUpgradeTimeout` <a name="resetUpgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.resetUpgradeTimeout"></a>

```java
public void resetUpgradeTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicy">deltaHealthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicy">healthPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicyInput">deltaHealthPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabledInput">forceRestartEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeoutInput">healthCheckRetryTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDurationInput">healthCheckStableDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDurationInput">healthCheckWaitDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicyInput">healthPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeoutInput">upgradeDomainTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeoutInput">upgradeReplicaSetCheckTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeoutInput">upgradeTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabled">forceRestartEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeout">healthCheckRetryTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDuration">healthCheckStableDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDuration">healthCheckWaitDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeout">upgradeDomainTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeout">upgradeReplicaSetCheckTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeout">upgradeTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deltaHealthPolicy`<sup>Required</sup> <a name="deltaHealthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicy"></a>

```java
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference getDeltaHealthPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyDeltaHealthPolicyOutputReference</a>

---

##### `healthPolicy`<sup>Required</sup> <a name="healthPolicy" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicy"></a>

```java
public ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference getHealthPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference">ServiceFabricClusterUpgradePolicyHealthPolicyOutputReference</a>

---

##### `deltaHealthPolicyInput`<sup>Optional</sup> <a name="deltaHealthPolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.deltaHealthPolicyInput"></a>

```java
public ServiceFabricClusterUpgradePolicyDeltaHealthPolicy getDeltaHealthPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyDeltaHealthPolicy">ServiceFabricClusterUpgradePolicyDeltaHealthPolicy</a>

---

##### `forceRestartEnabledInput`<sup>Optional</sup> <a name="forceRestartEnabledInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabledInput"></a>

```java
public java.lang.Object getForceRestartEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckRetryTimeoutInput`<sup>Optional</sup> <a name="healthCheckRetryTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeoutInput"></a>

```java
public java.lang.String getHealthCheckRetryTimeoutInput();
```

- *Type:* java.lang.String

---

##### `healthCheckStableDurationInput`<sup>Optional</sup> <a name="healthCheckStableDurationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDurationInput"></a>

```java
public java.lang.String getHealthCheckStableDurationInput();
```

- *Type:* java.lang.String

---

##### `healthCheckWaitDurationInput`<sup>Optional</sup> <a name="healthCheckWaitDurationInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDurationInput"></a>

```java
public java.lang.String getHealthCheckWaitDurationInput();
```

- *Type:* java.lang.String

---

##### `healthPolicyInput`<sup>Optional</sup> <a name="healthPolicyInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthPolicyInput"></a>

```java
public ServiceFabricClusterUpgradePolicyHealthPolicy getHealthPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyHealthPolicy">ServiceFabricClusterUpgradePolicyHealthPolicy</a>

---

##### `upgradeDomainTimeoutInput`<sup>Optional</sup> <a name="upgradeDomainTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeoutInput"></a>

```java
public java.lang.String getUpgradeDomainTimeoutInput();
```

- *Type:* java.lang.String

---

##### `upgradeReplicaSetCheckTimeoutInput`<sup>Optional</sup> <a name="upgradeReplicaSetCheckTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeoutInput"></a>

```java
public java.lang.String getUpgradeReplicaSetCheckTimeoutInput();
```

- *Type:* java.lang.String

---

##### `upgradeTimeoutInput`<sup>Optional</sup> <a name="upgradeTimeoutInput" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeoutInput"></a>

```java
public java.lang.String getUpgradeTimeoutInput();
```

- *Type:* java.lang.String

---

##### `forceRestartEnabled`<sup>Required</sup> <a name="forceRestartEnabled" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.forceRestartEnabled"></a>

```java
public java.lang.Object getForceRestartEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckRetryTimeout`<sup>Required</sup> <a name="healthCheckRetryTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckRetryTimeout"></a>

```java
public java.lang.String getHealthCheckRetryTimeout();
```

- *Type:* java.lang.String

---

##### `healthCheckStableDuration`<sup>Required</sup> <a name="healthCheckStableDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckStableDuration"></a>

```java
public java.lang.String getHealthCheckStableDuration();
```

- *Type:* java.lang.String

---

##### `healthCheckWaitDuration`<sup>Required</sup> <a name="healthCheckWaitDuration" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.healthCheckWaitDuration"></a>

```java
public java.lang.String getHealthCheckWaitDuration();
```

- *Type:* java.lang.String

---

##### `upgradeDomainTimeout`<sup>Required</sup> <a name="upgradeDomainTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeDomainTimeout"></a>

```java
public java.lang.String getUpgradeDomainTimeout();
```

- *Type:* java.lang.String

---

##### `upgradeReplicaSetCheckTimeout`<sup>Required</sup> <a name="upgradeReplicaSetCheckTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeReplicaSetCheckTimeout"></a>

```java
public java.lang.String getUpgradeReplicaSetCheckTimeout();
```

- *Type:* java.lang.String

---

##### `upgradeTimeout`<sup>Required</sup> <a name="upgradeTimeout" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.upgradeTimeout"></a>

```java
public java.lang.String getUpgradeTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicyOutputReference.property.internalValue"></a>

```java
public ServiceFabricClusterUpgradePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.serviceFabricCluster.ServiceFabricClusterUpgradePolicy">ServiceFabricClusterUpgradePolicy</a>

---



