# `vmwarePrivateCloud` Submodule <a name="`vmwarePrivateCloud` Submodule" id="@cdktf/provider-azurerm.vmwarePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwarePrivateCloud <a name="VmwarePrivateCloud" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud azurerm_vmware_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloud;

VmwarePrivateCloud.Builder.create(Construct scope, java.lang.String id)
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
    .managementCluster(VmwarePrivateCloudManagementCluster)
    .name(java.lang.String)
    .networkSubnetCidr(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .id(java.lang.String)
//  .internetConnectionEnabled(java.lang.Boolean)
//  .internetConnectionEnabled(IResolvable)
//  .nsxtPassword(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VmwarePrivateCloudTimeouts)
//  .vcenterPassword(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.networkSubnetCidr">networkSubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.internetConnectionEnabled">internetConnectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.nsxtPassword">nsxtPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.vcenterPassword">vcenterPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}.

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.managementCluster"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#management_cluster VmwarePrivateCloud#management_cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}.

---

##### `networkSubnetCidr`<sup>Required</sup> <a name="networkSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.networkSubnetCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetConnectionEnabled`<sup>Optional</sup> <a name="internetConnectionEnabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.internetConnectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}.

---

##### `nsxtPassword`<sup>Optional</sup> <a name="nsxtPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.nsxtPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#timeouts VmwarePrivateCloud#timeouts}

---

##### `vcenterPassword`<sup>Optional</sup> <a name="vcenterPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.vcenterPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster">putManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled">resetInternetConnectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword">resetNsxtPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword">resetVcenterPassword</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManagementCluster` <a name="putManagementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster"></a>

```java
public void putManagementCluster(VmwarePrivateCloudManagementCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts"></a>

```java
public void putTimeouts(VmwarePrivateCloudTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId"></a>

```java
public void resetId()
```

##### `resetInternetConnectionEnabled` <a name="resetInternetConnectionEnabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled"></a>

```java
public void resetInternetConnectionEnabled()
```

##### `resetNsxtPassword` <a name="resetNsxtPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword"></a>

```java
public void resetNsxtPassword()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVcenterPassword` <a name="resetVcenterPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword"></a>

```java
public void resetVcenterPassword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VmwarePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloud;

VmwarePrivateCloud.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloud;

VmwarePrivateCloud.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloud;

VmwarePrivateCloud.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloud;

VmwarePrivateCloud.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VmwarePrivateCloud.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VmwarePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VmwarePrivateCloud to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VmwarePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VmwarePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit">circuit</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint">hcxCloudManagerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr">managementSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint">nsxtCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint">nsxtManagerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr">provisioningSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint">vcenterCertificateThumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint">vcsaEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr">vmotionSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput">internetConnectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput">managementClusterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput">networkSubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput">nsxtPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput">vcenterPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled">internetConnectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr">networkSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword">nsxtPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword">vcenterPassword</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `circuit`<sup>Required</sup> <a name="circuit" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit"></a>

```java
public VmwarePrivateCloudCircuitList getCircuit();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a>

---

##### `hcxCloudManagerEndpoint`<sup>Required</sup> <a name="hcxCloudManagerEndpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint"></a>

```java
public java.lang.String getHcxCloudManagerEndpoint();
```

- *Type:* java.lang.String

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster"></a>

```java
public VmwarePrivateCloudManagementClusterOutputReference getManagementCluster();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a>

---

##### `managementSubnetCidr`<sup>Required</sup> <a name="managementSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr"></a>

```java
public java.lang.String getManagementSubnetCidr();
```

- *Type:* java.lang.String

---

##### `nsxtCertificateThumbprint`<sup>Required</sup> <a name="nsxtCertificateThumbprint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint"></a>

```java
public java.lang.String getNsxtCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `nsxtManagerEndpoint`<sup>Required</sup> <a name="nsxtManagerEndpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint"></a>

```java
public java.lang.String getNsxtManagerEndpoint();
```

- *Type:* java.lang.String

---

##### `provisioningSubnetCidr`<sup>Required</sup> <a name="provisioningSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr"></a>

```java
public java.lang.String getProvisioningSubnetCidr();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts"></a>

```java
public VmwarePrivateCloudTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a>

---

##### `vcenterCertificateThumbprint`<sup>Required</sup> <a name="vcenterCertificateThumbprint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint"></a>

```java
public java.lang.String getVcenterCertificateThumbprint();
```

- *Type:* java.lang.String

---

##### `vcsaEndpoint`<sup>Required</sup> <a name="vcsaEndpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint"></a>

```java
public java.lang.String getVcsaEndpoint();
```

- *Type:* java.lang.String

---

##### `vmotionSubnetCidr`<sup>Required</sup> <a name="vmotionSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr"></a>

```java
public java.lang.String getVmotionSubnetCidr();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internetConnectionEnabledInput`<sup>Optional</sup> <a name="internetConnectionEnabledInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput"></a>

```java
public java.lang.Object getInternetConnectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managementClusterInput`<sup>Optional</sup> <a name="managementClusterInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput"></a>

```java
public VmwarePrivateCloudManagementCluster getManagementClusterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSubnetCidrInput`<sup>Optional</sup> <a name="networkSubnetCidrInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput"></a>

```java
public java.lang.String getNetworkSubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `nsxtPasswordInput`<sup>Optional</sup> <a name="nsxtPasswordInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput"></a>

```java
public java.lang.String getNsxtPasswordInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

---

##### `vcenterPasswordInput`<sup>Optional</sup> <a name="vcenterPasswordInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput"></a>

```java
public java.lang.String getVcenterPasswordInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internetConnectionEnabled`<sup>Required</sup> <a name="internetConnectionEnabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled"></a>

```java
public java.lang.Object getInternetConnectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkSubnetCidr`<sup>Required</sup> <a name="networkSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr"></a>

```java
public java.lang.String getNetworkSubnetCidr();
```

- *Type:* java.lang.String

---

##### `nsxtPassword`<sup>Required</sup> <a name="nsxtPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword"></a>

```java
public java.lang.String getNsxtPassword();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vcenterPassword`<sup>Required</sup> <a name="vcenterPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword"></a>

```java
public java.lang.String getVcenterPassword();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VmwarePrivateCloudCircuit <a name="VmwarePrivateCloudCircuit" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudCircuit;

VmwarePrivateCloudCircuit.builder()
    .build();
```


### VmwarePrivateCloudConfig <a name="VmwarePrivateCloudConfig" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudConfig;

VmwarePrivateCloudConfig.builder()
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
    .managementCluster(VmwarePrivateCloudManagementCluster)
    .name(java.lang.String)
    .networkSubnetCidr(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .id(java.lang.String)
//  .internetConnectionEnabled(java.lang.Boolean)
//  .internetConnectionEnabled(IResolvable)
//  .nsxtPassword(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VmwarePrivateCloudTimeouts)
//  .vcenterPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster">managementCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr">networkSubnetCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled">internetConnectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword">nsxtPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword">vcenterPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}.

---

##### `managementCluster`<sup>Required</sup> <a name="managementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster"></a>

```java
public VmwarePrivateCloudManagementCluster getManagementCluster();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#management_cluster VmwarePrivateCloud#management_cluster}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}.

---

##### `networkSubnetCidr`<sup>Required</sup> <a name="networkSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr"></a>

```java
public java.lang.String getNetworkSubnetCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetConnectionEnabled`<sup>Optional</sup> <a name="internetConnectionEnabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled"></a>

```java
public java.lang.Object getInternetConnectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}.

---

##### `nsxtPassword`<sup>Optional</sup> <a name="nsxtPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword"></a>

```java
public java.lang.String getNsxtPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts"></a>

```java
public VmwarePrivateCloudTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#timeouts VmwarePrivateCloud#timeouts}

---

##### `vcenterPassword`<sup>Optional</sup> <a name="vcenterPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword"></a>

```java
public java.lang.String getVcenterPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}.

---

### VmwarePrivateCloudManagementCluster <a name="VmwarePrivateCloudManagementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudManagementCluster;

VmwarePrivateCloudManagementCluster.builder()
    .size(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}.

---

### VmwarePrivateCloudTimeouts <a name="VmwarePrivateCloudTimeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudTimeouts;

VmwarePrivateCloudTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwarePrivateCloudCircuitList <a name="VmwarePrivateCloudCircuitList" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudCircuitList;

new VmwarePrivateCloudCircuitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get"></a>

```java
public VmwarePrivateCloudCircuitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VmwarePrivateCloudCircuitOutputReference <a name="VmwarePrivateCloudCircuitOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudCircuitOutputReference;

new VmwarePrivateCloudCircuitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId">expressRouteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId">expressRoutePrivatePeeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr">primarySubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr">secondarySubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressRouteId`<sup>Required</sup> <a name="expressRouteId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId"></a>

```java
public java.lang.String getExpressRouteId();
```

- *Type:* java.lang.String

---

##### `expressRoutePrivatePeeringId`<sup>Required</sup> <a name="expressRoutePrivatePeeringId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId"></a>

```java
public java.lang.String getExpressRoutePrivatePeeringId();
```

- *Type:* java.lang.String

---

##### `primarySubnetCidr`<sup>Required</sup> <a name="primarySubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr"></a>

```java
public java.lang.String getPrimarySubnetCidr();
```

- *Type:* java.lang.String

---

##### `secondarySubnetCidr`<sup>Required</sup> <a name="secondarySubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr"></a>

```java
public java.lang.String getSecondarySubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue"></a>

```java
public VmwarePrivateCloudCircuit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a>

---


### VmwarePrivateCloudManagementClusterOutputReference <a name="VmwarePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudManagementClusterOutputReference;

new VmwarePrivateCloudManagementClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```java
public VmwarePrivateCloudManagementCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---


### VmwarePrivateCloudTimeoutsOutputReference <a name="VmwarePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vmware_private_cloud.VmwarePrivateCloudTimeoutsOutputReference;

new VmwarePrivateCloudTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

---



