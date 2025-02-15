# `workloadsSapSingleNodeVirtualInstance` Submodule <a name="`workloadsSapSingleNodeVirtualInstance` Submodule" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkloadsSapSingleNodeVirtualInstance <a name="WorkloadsSapSingleNodeVirtualInstance" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance azurerm_workloads_sap_single_node_virtual_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstance;

WorkloadsSapSingleNodeVirtualInstance.Builder.create(Construct scope, java.lang.String id)
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
    .appLocation(java.lang.String)
    .environment(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sapFqdn(java.lang.String)
    .sapProduct(java.lang.String)
    .singleServerConfiguration(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration)
//  .id(java.lang.String)
//  .identity(WorkloadsSapSingleNodeVirtualInstanceIdentity)
//  .managedResourceGroupName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkloadsSapSingleNodeVirtualInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.appLocation">appLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.sapFqdn">sapFqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.sapProduct">sapProduct</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.singleServerConfiguration">singleServerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | single_server_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appLocation`<sup>Required</sup> <a name="appLocation" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.appLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}.

---

##### `sapFqdn`<sup>Required</sup> <a name="sapFqdn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.sapFqdn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}.

---

##### `sapProduct`<sup>Required</sup> <a name="sapProduct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.sapProduct"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}.

---

##### `singleServerConfiguration`<sup>Required</sup> <a name="singleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.singleServerConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

single_server_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#single_server_configuration WorkloadsSapSingleNodeVirtualInstance#single_server_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#identity WorkloadsSapSingleNodeVirtualInstance#identity}

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.managedResourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#timeouts WorkloadsSapSingleNodeVirtualInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration">putSingleServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity"></a>

```java
public void putIdentity(WorkloadsSapSingleNodeVirtualInstanceIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---

##### `putSingleServerConfiguration` <a name="putSingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration"></a>

```java
public void putSingleServerConfiguration(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putSingleServerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts"></a>

```java
public void putTimeouts(WorkloadsSapSingleNodeVirtualInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetManagedResourceGroupName"></a>

```java
public void resetManagedResourceGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkloadsSapSingleNodeVirtualInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstance;

WorkloadsSapSingleNodeVirtualInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstance;

WorkloadsSapSingleNodeVirtualInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstance;

WorkloadsSapSingleNodeVirtualInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstance;

WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WorkloadsSapSingleNodeVirtualInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkloadsSapSingleNodeVirtualInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkloadsSapSingleNodeVirtualInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WorkloadsSapSingleNodeVirtualInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference">WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfiguration">singleServerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference">WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocationInput">appLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdnInput">sapFqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProductInput">sapProductInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfigurationInput">singleServerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocation">appLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdn">sapFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProduct">sapProduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identity"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference">WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference</a>

---

##### `singleServerConfiguration`<sup>Required</sup> <a name="singleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfiguration"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference getSingleServerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeouts"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference">WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference</a>

---

##### `appLocationInput`<sup>Optional</sup> <a name="appLocationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocationInput"></a>

```java
public java.lang.String getAppLocationInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.identityInput"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupNameInput"></a>

```java
public java.lang.String getManagedResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sapFqdnInput`<sup>Optional</sup> <a name="sapFqdnInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdnInput"></a>

```java
public java.lang.String getSapFqdnInput();
```

- *Type:* java.lang.String

---

##### `sapProductInput`<sup>Optional</sup> <a name="sapProductInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProductInput"></a>

```java
public java.lang.String getSapProductInput();
```

- *Type:* java.lang.String

---

##### `singleServerConfigurationInput`<sup>Optional</sup> <a name="singleServerConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.singleServerConfigurationInput"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration getSingleServerConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

---

##### `appLocation`<sup>Required</sup> <a name="appLocation" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.appLocation"></a>

```java
public java.lang.String getAppLocation();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sapFqdn`<sup>Required</sup> <a name="sapFqdn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapFqdn"></a>

```java
public java.lang.String getSapFqdn();
```

- *Type:* java.lang.String

---

##### `sapProduct`<sup>Required</sup> <a name="sapProduct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.sapProduct"></a>

```java
public java.lang.String getSapProduct();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadsSapSingleNodeVirtualInstanceConfig <a name="WorkloadsSapSingleNodeVirtualInstanceConfig" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceConfig;

WorkloadsSapSingleNodeVirtualInstanceConfig.builder()
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
    .appLocation(java.lang.String)
    .environment(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sapFqdn(java.lang.String)
    .sapProduct(java.lang.String)
    .singleServerConfiguration(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration)
//  .id(java.lang.String)
//  .identity(WorkloadsSapSingleNodeVirtualInstanceIdentity)
//  .managedResourceGroupName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(WorkloadsSapSingleNodeVirtualInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.appLocation">appLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapFqdn">sapFqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapProduct">sapProduct</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.singleServerConfiguration">singleServerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | single_server_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appLocation`<sup>Required</sup> <a name="appLocation" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.appLocation"></a>

```java
public java.lang.String getAppLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#app_location WorkloadsSapSingleNodeVirtualInstance#app_location}.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#environment WorkloadsSapSingleNodeVirtualInstance#environment}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#location WorkloadsSapSingleNodeVirtualInstance#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#name WorkloadsSapSingleNodeVirtualInstance#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#resource_group_name WorkloadsSapSingleNodeVirtualInstance#resource_group_name}.

---

##### `sapFqdn`<sup>Required</sup> <a name="sapFqdn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapFqdn"></a>

```java
public java.lang.String getSapFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_fqdn WorkloadsSapSingleNodeVirtualInstance#sap_fqdn}.

---

##### `sapProduct`<sup>Required</sup> <a name="sapProduct" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.sapProduct"></a>

```java
public java.lang.String getSapProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sap_product WorkloadsSapSingleNodeVirtualInstance#sap_product}.

---

##### `singleServerConfiguration`<sup>Required</sup> <a name="singleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.singleServerConfiguration"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration getSingleServerConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

single_server_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#single_server_configuration WorkloadsSapSingleNodeVirtualInstance#single_server_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#id WorkloadsSapSingleNodeVirtualInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.identity"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#identity WorkloadsSapSingleNodeVirtualInstance#identity}

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#managed_resource_group_name WorkloadsSapSingleNodeVirtualInstance#managed_resource_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#tags WorkloadsSapSingleNodeVirtualInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceConfig.property.timeouts"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#timeouts WorkloadsSapSingleNodeVirtualInstance#timeouts}

---

### WorkloadsSapSingleNodeVirtualInstanceIdentity <a name="WorkloadsSapSingleNodeVirtualInstanceIdentity" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceIdentity;

WorkloadsSapSingleNodeVirtualInstanceIdentity.builder()
    .identityIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#identity_ids WorkloadsSapSingleNodeVirtualInstance#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#type WorkloadsSapSingleNodeVirtualInstance#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#identity_ids WorkloadsSapSingleNodeVirtualInstance#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#type WorkloadsSapSingleNodeVirtualInstance#type}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration;

WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.builder()
    .appResourceGroupName(java.lang.String)
    .subnetId(java.lang.String)
    .virtualMachineConfiguration(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration)
//  .databaseType(java.lang.String)
//  .diskVolumeConfiguration(IResolvable)
//  .diskVolumeConfiguration(java.util.List<WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration>)
//  .secondaryIpEnabled(java.lang.Boolean)
//  .secondaryIpEnabled(IResolvable)
//  .virtualMachineResourceNames(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.appResourceGroupName">appResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#app_resource_group_name WorkloadsSapSingleNodeVirtualInstance#app_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#subnet_id WorkloadsSapSingleNodeVirtualInstance#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineConfiguration">virtualMachineConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | virtual_machine_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#database_type WorkloadsSapSingleNodeVirtualInstance#database_type}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.diskVolumeConfiguration">diskVolumeConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>></code> | disk_volume_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.secondaryIpEnabled">secondaryIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#secondary_ip_enabled WorkloadsSapSingleNodeVirtualInstance#secondary_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineResourceNames">virtualMachineResourceNames</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | virtual_machine_resource_names block. |

---

##### `appResourceGroupName`<sup>Required</sup> <a name="appResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.appResourceGroupName"></a>

```java
public java.lang.String getAppResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#app_resource_group_name WorkloadsSapSingleNodeVirtualInstance#app_resource_group_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#subnet_id WorkloadsSapSingleNodeVirtualInstance#subnet_id}.

---

##### `virtualMachineConfiguration`<sup>Required</sup> <a name="virtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineConfiguration"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration getVirtualMachineConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

virtual_machine_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_configuration WorkloadsSapSingleNodeVirtualInstance#virtual_machine_configuration}

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#database_type WorkloadsSapSingleNodeVirtualInstance#database_type}.

---

##### `diskVolumeConfiguration`<sup>Optional</sup> <a name="diskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.diskVolumeConfiguration"></a>

```java
public java.lang.Object getDiskVolumeConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>>

disk_volume_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#disk_volume_configuration WorkloadsSapSingleNodeVirtualInstance#disk_volume_configuration}

---

##### `secondaryIpEnabled`<sup>Optional</sup> <a name="secondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.secondaryIpEnabled"></a>

```java
public java.lang.Object getSecondaryIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#secondary_ip_enabled WorkloadsSapSingleNodeVirtualInstance#secondary_ip_enabled}.

---

##### `virtualMachineResourceNames`<sup>Optional</sup> <a name="virtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration.property.virtualMachineResourceNames"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames getVirtualMachineResourceNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

virtual_machine_resource_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_resource_names WorkloadsSapSingleNodeVirtualInstance#virtual_machine_resource_names}

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration;

WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.builder()
    .numberOfDisks(java.lang.Number)
    .sizeInGb(java.lang.Number)
    .skuName(java.lang.String)
    .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#number_of_disks WorkloadsSapSingleNodeVirtualInstance#number_of_disks}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#size_in_gb WorkloadsSapSingleNodeVirtualInstance#size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sku_name WorkloadsSapSingleNodeVirtualInstance#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}. |

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#number_of_disks WorkloadsSapSingleNodeVirtualInstance#number_of_disks}.

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#size_in_gb WorkloadsSapSingleNodeVirtualInstance#size_in_gb}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sku_name WorkloadsSapSingleNodeVirtualInstance#sku_name}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration;

WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.builder()
    .image(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage)
    .osProfile(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile)
    .virtualMachineSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.image">image</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | os_profile block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.virtualMachineSize">virtualMachineSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_size WorkloadsSapSingleNodeVirtualInstance#virtual_machine_size}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.image"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage getImage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#image WorkloadsSapSingleNodeVirtualInstance#image}

---

##### `osProfile`<sup>Required</sup> <a name="osProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.osProfile"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile getOsProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

os_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#os_profile WorkloadsSapSingleNodeVirtualInstance#os_profile}

---

##### `virtualMachineSize`<sup>Required</sup> <a name="virtualMachineSize" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration.property.virtualMachineSize"></a>

```java
public java.lang.String getVirtualMachineSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_size WorkloadsSapSingleNodeVirtualInstance#virtual_machine_size}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage;

WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#offer WorkloadsSapSingleNodeVirtualInstance#offer}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#publisher WorkloadsSapSingleNodeVirtualInstance#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sku WorkloadsSapSingleNodeVirtualInstance#sku}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#version WorkloadsSapSingleNodeVirtualInstance#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#offer WorkloadsSapSingleNodeVirtualInstance#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#publisher WorkloadsSapSingleNodeVirtualInstance#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#sku WorkloadsSapSingleNodeVirtualInstance#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#version WorkloadsSapSingleNodeVirtualInstance#version}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile;

WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.builder()
    .adminUsername(java.lang.String)
    .sshPrivateKey(java.lang.String)
    .sshPublicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#admin_username WorkloadsSapSingleNodeVirtualInstance#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_private_key WorkloadsSapSingleNodeVirtualInstance#ssh_private_key}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_public_key WorkloadsSapSingleNodeVirtualInstance#ssh_public_key}. |

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#admin_username WorkloadsSapSingleNodeVirtualInstance#admin_username}.

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_private_key WorkloadsSapSingleNodeVirtualInstance#ssh_private_key}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#ssh_public_key WorkloadsSapSingleNodeVirtualInstance#ssh_public_key}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames;

WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.builder()
//  .dataDisk(IResolvable)
//  .dataDisk(java.util.List<WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk>)
//  .hostName(java.lang.String)
//  .networkInterfaceNames(java.util.List<java.lang.String>)
//  .osDiskName(java.lang.String)
//  .virtualMachineName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.dataDisk">dataDisk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>></code> | data_disk block. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#host_name WorkloadsSapSingleNodeVirtualInstance#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.networkInterfaceNames">networkInterfaceNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#network_interface_names WorkloadsSapSingleNodeVirtualInstance#network_interface_names}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.osDiskName">osDiskName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#os_disk_name WorkloadsSapSingleNodeVirtualInstance#os_disk_name}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.virtualMachineName">virtualMachineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_name WorkloadsSapSingleNodeVirtualInstance#virtual_machine_name}. |

---

##### `dataDisk`<sup>Optional</sup> <a name="dataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.dataDisk"></a>

```java
public java.lang.Object getDataDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>>

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#data_disk WorkloadsSapSingleNodeVirtualInstance#data_disk}

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#host_name WorkloadsSapSingleNodeVirtualInstance#host_name}.

---

##### `networkInterfaceNames`<sup>Optional</sup> <a name="networkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.networkInterfaceNames"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#network_interface_names WorkloadsSapSingleNodeVirtualInstance#network_interface_names}.

---

##### `osDiskName`<sup>Optional</sup> <a name="osDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.osDiskName"></a>

```java
public java.lang.String getOsDiskName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#os_disk_name WorkloadsSapSingleNodeVirtualInstance#os_disk_name}.

---

##### `virtualMachineName`<sup>Optional</sup> <a name="virtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames.property.virtualMachineName"></a>

```java
public java.lang.String getVirtualMachineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#virtual_machine_name WorkloadsSapSingleNodeVirtualInstance#virtual_machine_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk;

WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.builder()
    .names(java.util.List<java.lang.String>)
    .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#names WorkloadsSapSingleNodeVirtualInstance#names}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#names WorkloadsSapSingleNodeVirtualInstance#names}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#volume_name WorkloadsSapSingleNodeVirtualInstance#volume_name}.

---

### WorkloadsSapSingleNodeVirtualInstanceTimeouts <a name="WorkloadsSapSingleNodeVirtualInstanceTimeouts" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceTimeouts;

WorkloadsSapSingleNodeVirtualInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#create WorkloadsSapSingleNodeVirtualInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#delete WorkloadsSapSingleNodeVirtualInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#read WorkloadsSapSingleNodeVirtualInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#update WorkloadsSapSingleNodeVirtualInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#create WorkloadsSapSingleNodeVirtualInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#delete WorkloadsSapSingleNodeVirtualInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#read WorkloadsSapSingleNodeVirtualInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/workloads_sap_single_node_virtual_instance#update WorkloadsSapSingleNodeVirtualInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentityOutputReference.property.internalValue"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceIdentity">WorkloadsSapSingleNodeVirtualInstanceIdentity</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisksInput">numberOfDisksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGbInput">sizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisks">numberOfDisks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGb">sizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberOfDisksInput`<sup>Optional</sup> <a name="numberOfDisksInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisksInput"></a>

```java
public java.lang.Number getNumberOfDisksInput();
```

- *Type:* java.lang.Number

---

##### `sizeInGbInput`<sup>Optional</sup> <a name="sizeInGbInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGbInput"></a>

```java
public java.lang.Number getSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `numberOfDisks`<sup>Required</sup> <a name="numberOfDisks" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.numberOfDisks"></a>

```java
public java.lang.Number getNumberOfDisks();
```

- *Type:* java.lang.Number

---

##### `sizeInGb`<sup>Required</sup> <a name="sizeInGb" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.sizeInGb"></a>

```java
public java.lang.Number getSizeInGb();
```

- *Type:* java.lang.Number

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration">putDiskVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration">putVirtualMachineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames">putVirtualMachineResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDiskVolumeConfiguration">resetDiskVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetSecondaryIpEnabled">resetSecondaryIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetVirtualMachineResourceNames">resetVirtualMachineResourceNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDiskVolumeConfiguration` <a name="putDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration"></a>

```java
public void putDiskVolumeConfiguration(IResolvable OR java.util.List<WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putDiskVolumeConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>>

---

##### `putVirtualMachineConfiguration` <a name="putVirtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration"></a>

```java
public void putVirtualMachineConfiguration(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---

##### `putVirtualMachineResourceNames` <a name="putVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames"></a>

```java
public void putVirtualMachineResourceNames(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.putVirtualMachineResourceNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---

##### `resetDatabaseType` <a name="resetDatabaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDatabaseType"></a>

```java
public void resetDatabaseType()
```

##### `resetDiskVolumeConfiguration` <a name="resetDiskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetDiskVolumeConfiguration"></a>

```java
public void resetDiskVolumeConfiguration()
```

##### `resetSecondaryIpEnabled` <a name="resetSecondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetSecondaryIpEnabled"></a>

```java
public void resetSecondaryIpEnabled()
```

##### `resetVirtualMachineResourceNames` <a name="resetVirtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.resetVirtualMachineResourceNames"></a>

```java
public void resetVirtualMachineResourceNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfiguration">diskVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfiguration">virtualMachineConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNames">virtualMachineResourceNames</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupNameInput">appResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseTypeInput">databaseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfigurationInput">diskVolumeConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabledInput">secondaryIpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfigurationInput">virtualMachineConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNamesInput">virtualMachineResourceNamesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupName">appResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseType">databaseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabled">secondaryIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskVolumeConfiguration`<sup>Required</sup> <a name="diskVolumeConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfiguration"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList getDiskVolumeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfigurationList</a>

---

##### `virtualMachineConfiguration`<sup>Required</sup> <a name="virtualMachineConfiguration" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfiguration"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference getVirtualMachineConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference</a>

---

##### `virtualMachineResourceNames`<sup>Required</sup> <a name="virtualMachineResourceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNames"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference getVirtualMachineResourceNames();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference</a>

---

##### `appResourceGroupNameInput`<sup>Optional</sup> <a name="appResourceGroupNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupNameInput"></a>

```java
public java.lang.String getAppResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseTypeInput"></a>

```java
public java.lang.String getDatabaseTypeInput();
```

- *Type:* java.lang.String

---

##### `diskVolumeConfigurationInput`<sup>Optional</sup> <a name="diskVolumeConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.diskVolumeConfigurationInput"></a>

```java
public java.lang.Object getDiskVolumeConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationDiskVolumeConfiguration</a>>

---

##### `secondaryIpEnabledInput`<sup>Optional</sup> <a name="secondaryIpEnabledInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabledInput"></a>

```java
public java.lang.Object getSecondaryIpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineConfigurationInput`<sup>Optional</sup> <a name="virtualMachineConfigurationInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineConfigurationInput"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration getVirtualMachineConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---

##### `virtualMachineResourceNamesInput`<sup>Optional</sup> <a name="virtualMachineResourceNamesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.virtualMachineResourceNamesInput"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames getVirtualMachineResourceNamesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---

##### `appResourceGroupName`<sup>Required</sup> <a name="appResourceGroupName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.appResourceGroupName"></a>

```java
public java.lang.String getAppResourceGroupName();
```

- *Type:* java.lang.String

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.databaseType"></a>

```java
public java.lang.String getDatabaseType();
```

- *Type:* java.lang.String

---

##### `secondaryIpEnabled`<sup>Required</sup> <a name="secondaryIpEnabled" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.secondaryIpEnabled"></a>

```java
public java.lang.Object getSecondaryIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationOutputReference.property.internalValue"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference.property.internalValue"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKeyInput">sshPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKey">sshPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `sshPrivateKeyInput`<sup>Optional</sup> <a name="sshPrivateKeyInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKeyInput"></a>

```java
public java.lang.String getSshPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKeyInput"></a>

```java
public java.lang.String getSshPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `sshPrivateKey`<sup>Required</sup> <a name="sshPrivateKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPrivateKey"></a>

```java
public java.lang.String getSshPrivateKey();
```

- *Type:* java.lang.String

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference.property.internalValue"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile">putOsProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImage` <a name="putImage" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage"></a>

```java
public void putImage(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---

##### `putOsProfile` <a name="putOsProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile"></a>

```java
public void putOsProfile(WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.putOsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.image">image</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfile">osProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfileInput">osProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSizeInput">virtualMachineSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSize">virtualMachineSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.image"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference getImage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImageOutputReference</a>

---

##### `osProfile`<sup>Required</sup> <a name="osProfile" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfile"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference getOsProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfileOutputReference</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.imageInput"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage getImageInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationImage</a>

---

##### `osProfileInput`<sup>Optional</sup> <a name="osProfileInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.osProfileInput"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile getOsProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOsProfile</a>

---

##### `virtualMachineSizeInput`<sup>Optional</sup> <a name="virtualMachineSizeInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSizeInput"></a>

```java
public java.lang.String getVirtualMachineSizeInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineSize`<sup>Required</sup> <a name="virtualMachineSize" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.virtualMachineSize"></a>

```java
public java.lang.String getVirtualMachineSize();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfigurationOutputReference.property.internalValue"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineConfiguration</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.namesInput">namesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namesInput`<sup>Optional</sup> <a name="namesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.namesInput"></a>

```java
public java.util.List<java.lang.String> getNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>

---


### WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk">putDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetDataDisk">resetDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetNetworkInterfaceNames">resetNetworkInterfaceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetOsDiskName">resetOsDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetVirtualMachineName">resetVirtualMachineName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataDisk` <a name="putDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk"></a>

```java
public void putDataDisk(IResolvable OR java.util.List<WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.putDataDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>>

---

##### `resetDataDisk` <a name="resetDataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetDataDisk"></a>

```java
public void resetDataDisk()
```

##### `resetHostName` <a name="resetHostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetHostName"></a>

```java
public void resetHostName()
```

##### `resetNetworkInterfaceNames` <a name="resetNetworkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetNetworkInterfaceNames"></a>

```java
public void resetNetworkInterfaceNames()
```

##### `resetOsDiskName` <a name="resetOsDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetOsDiskName"></a>

```java
public void resetOsDiskName()
```

##### `resetVirtualMachineName` <a name="resetVirtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.resetVirtualMachineName"></a>

```java
public void resetVirtualMachineName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDisk">dataDisk</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDiskInput">dataDiskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNamesInput">networkInterfaceNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskNameInput">osDiskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineNameInput">virtualMachineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNames">networkInterfaceNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskName">osDiskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineName">virtualMachineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataDisk`<sup>Required</sup> <a name="dataDisk" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDisk"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList getDataDisk();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDiskList</a>

---

##### `dataDiskInput`<sup>Optional</sup> <a name="dataDiskInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.dataDiskInput"></a>

```java
public java.lang.Object getDataDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesDataDisk</a>>

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceNamesInput`<sup>Optional</sup> <a name="networkInterfaceNamesInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNamesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osDiskNameInput`<sup>Optional</sup> <a name="osDiskNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskNameInput"></a>

```java
public java.lang.String getOsDiskNameInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineNameInput`<sup>Optional</sup> <a name="virtualMachineNameInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineNameInput"></a>

```java
public java.lang.String getVirtualMachineNameInput();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `networkInterfaceNames`<sup>Required</sup> <a name="networkInterfaceNames" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.networkInterfaceNames"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osDiskName`<sup>Required</sup> <a name="osDiskName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.osDiskName"></a>

```java
public java.lang.String getOsDiskName();
```

- *Type:* java.lang.String

---

##### `virtualMachineName`<sup>Required</sup> <a name="virtualMachineName" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.virtualMachineName"></a>

```java
public java.lang.String getVirtualMachineName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNamesOutputReference.property.internalValue"></a>

```java
public WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames">WorkloadsSapSingleNodeVirtualInstanceSingleServerConfigurationVirtualMachineResourceNames</a>

---


### WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference <a name="WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.workloads_sap_single_node_virtual_instance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference;

new WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.workloadsSapSingleNodeVirtualInstance.WorkloadsSapSingleNodeVirtualInstanceTimeouts">WorkloadsSapSingleNodeVirtualInstanceTimeouts</a>

---



