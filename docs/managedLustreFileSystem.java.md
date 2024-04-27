# `managedLustreFileSystem` Submodule <a name="`managedLustreFileSystem` Submodule" id="@cdktf/provider-azurerm.managedLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedLustreFileSystem <a name="ManagedLustreFileSystem" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system azurerm_managed_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystem;

ManagedLustreFileSystem.Builder.create(Construct scope, java.lang.String id)
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
    .maintenanceWindow(ManagedLustreFileSystemMaintenanceWindow)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .storageCapacityInTb(java.lang.Number)
    .subnetId(java.lang.String)
    .zones(java.util.List<java.lang.String>)
//  .encryptionKey(ManagedLustreFileSystemEncryptionKey)
//  .hsmSetting(ManagedLustreFileSystemHsmSetting)
//  .id(java.lang.String)
//  .identity(ManagedLustreFileSystemIdentity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ManagedLustreFileSystemTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.storageCapacityInTb">storageCapacityInTb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.hsmSetting">hsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | hsm_setting block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}.

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#maintenance_window ManagedLustreFileSystem#maintenance_window}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}.

---

##### `storageCapacityInTb`<sup>Required</sup> <a name="storageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.storageCapacityInTb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#encryption_key ManagedLustreFileSystem#encryption_key}

---

##### `hsmSetting`<sup>Optional</sup> <a name="hsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.hsmSetting"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

hsm_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#hsm_setting ManagedLustreFileSystem#hsm_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#identity ManagedLustreFileSystem#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#timeouts ManagedLustreFileSystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting">putHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting">resetHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey"></a>

```java
public void putEncryptionKey(ManagedLustreFileSystemEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `putHsmSetting` <a name="putHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting"></a>

```java
public void putHsmSetting(ManagedLustreFileSystemHsmSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putHsmSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity"></a>

```java
public void putIdentity(ManagedLustreFileSystemIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(ManagedLustreFileSystemMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts"></a>

```java
public void putTimeouts(ManagedLustreFileSystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetHsmSetting` <a name="resetHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetHsmSetting"></a>

```java
public void resetHsmSetting()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystem;

ManagedLustreFileSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystem;

ManagedLustreFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystem;

ManagedLustreFileSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystem;

ManagedLustreFileSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedLustreFileSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedLustreFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedLustreFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedLustreFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedLustreFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting">hsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress">mgsAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput">hsmSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput">storageCapacityInTbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb">storageCapacityInTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKey"></a>

```java
public ManagedLustreFileSystemEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference">ManagedLustreFileSystemEncryptionKeyOutputReference</a>

---

##### `hsmSetting`<sup>Required</sup> <a name="hsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSetting"></a>

```java
public ManagedLustreFileSystemHsmSettingOutputReference getHsmSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference">ManagedLustreFileSystemHsmSettingOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identity"></a>

```java
public ManagedLustreFileSystemIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference">ManagedLustreFileSystemIdentityOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindow"></a>

```java
public ManagedLustreFileSystemMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference">ManagedLustreFileSystemMaintenanceWindowOutputReference</a>

---

##### `mgsAddress`<sup>Required</sup> <a name="mgsAddress" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.mgsAddress"></a>

```java
public java.lang.String getMgsAddress();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeouts"></a>

```java
public ManagedLustreFileSystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference">ManagedLustreFileSystemTimeoutsOutputReference</a>

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.encryptionKeyInput"></a>

```java
public ManagedLustreFileSystemEncryptionKey getEncryptionKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---

##### `hsmSettingInput`<sup>Optional</sup> <a name="hsmSettingInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.hsmSettingInput"></a>

```java
public ManagedLustreFileSystemHsmSetting getHsmSettingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.identityInput"></a>

```java
public ManagedLustreFileSystemIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.maintenanceWindowInput"></a>

```java
public ManagedLustreFileSystemMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `storageCapacityInTbInput`<sup>Optional</sup> <a name="storageCapacityInTbInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTbInput"></a>

```java
public java.lang.Number getStorageCapacityInTbInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `storageCapacityInTb`<sup>Required</sup> <a name="storageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.storageCapacityInTb"></a>

```java
public java.lang.Number getStorageCapacityInTb();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedLustreFileSystemConfig <a name="ManagedLustreFileSystemConfig" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemConfig;

ManagedLustreFileSystemConfig.builder()
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
    .maintenanceWindow(ManagedLustreFileSystemMaintenanceWindow)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
    .storageCapacityInTb(java.lang.Number)
    .subnetId(java.lang.String)
    .zones(java.util.List<java.lang.String>)
//  .encryptionKey(ManagedLustreFileSystemEncryptionKey)
//  .hsmSetting(ManagedLustreFileSystemHsmSetting)
//  .id(java.lang.String)
//  .identity(ManagedLustreFileSystemIdentity)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ManagedLustreFileSystemTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb">storageCapacityInTb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting">hsmSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | hsm_setting block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#location ManagedLustreFileSystem#location}.

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.maintenanceWindow"></a>

```java
public ManagedLustreFileSystemMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#maintenance_window ManagedLustreFileSystem#maintenance_window}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#name ManagedLustreFileSystem#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#resource_group_name ManagedLustreFileSystem#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#sku_name ManagedLustreFileSystem#sku_name}.

---

##### `storageCapacityInTb`<sup>Required</sup> <a name="storageCapacityInTb" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.storageCapacityInTb"></a>

```java
public java.lang.Number getStorageCapacityInTb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#storage_capacity_in_tb ManagedLustreFileSystem#storage_capacity_in_tb}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#subnet_id ManagedLustreFileSystem#subnet_id}.

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#zones ManagedLustreFileSystem#zones}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.encryptionKey"></a>

```java
public ManagedLustreFileSystemEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#encryption_key ManagedLustreFileSystem#encryption_key}

---

##### `hsmSetting`<sup>Optional</sup> <a name="hsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.hsmSetting"></a>

```java
public ManagedLustreFileSystemHsmSetting getHsmSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

hsm_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#hsm_setting ManagedLustreFileSystem#hsm_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#id ManagedLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.identity"></a>

```java
public ManagedLustreFileSystemIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#identity ManagedLustreFileSystem#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#tags ManagedLustreFileSystem#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemConfig.property.timeouts"></a>

```java
public ManagedLustreFileSystemTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#timeouts ManagedLustreFileSystem#timeouts}

---

### ManagedLustreFileSystemEncryptionKey <a name="ManagedLustreFileSystemEncryptionKey" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemEncryptionKey;

ManagedLustreFileSystemEncryptionKey.builder()
    .keyUrl(java.lang.String)
    .sourceVaultId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl">keyUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}. |

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.keyUrl"></a>

```java
public java.lang.String getKeyUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#key_url ManagedLustreFileSystem#key_url}.

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#source_vault_id ManagedLustreFileSystem#source_vault_id}.

---

### ManagedLustreFileSystemHsmSetting <a name="ManagedLustreFileSystemHsmSetting" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemHsmSetting;

ManagedLustreFileSystemHsmSetting.builder()
    .containerId(java.lang.String)
    .loggingContainerId(java.lang.String)
//  .importPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId">containerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId">loggingContainerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix">importPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}. |

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#container_id ManagedLustreFileSystem#container_id}.

---

##### `loggingContainerId`<sup>Required</sup> <a name="loggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.loggingContainerId"></a>

```java
public java.lang.String getLoggingContainerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#logging_container_id ManagedLustreFileSystem#logging_container_id}.

---

##### `importPrefix`<sup>Optional</sup> <a name="importPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting.property.importPrefix"></a>

```java
public java.lang.String getImportPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#import_prefix ManagedLustreFileSystem#import_prefix}.

---

### ManagedLustreFileSystemIdentity <a name="ManagedLustreFileSystemIdentity" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemIdentity;

ManagedLustreFileSystemIdentity.builder()
    .identityIds(java.util.List<java.lang.String>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#identity_ids ManagedLustreFileSystem#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#type ManagedLustreFileSystem#type}.

---

### ManagedLustreFileSystemMaintenanceWindow <a name="ManagedLustreFileSystemMaintenanceWindow" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemMaintenanceWindow;

ManagedLustreFileSystemMaintenanceWindow.builder()
    .dayOfWeek(java.lang.String)
    .timeOfDayInUtc(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc">timeOfDayInUtc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#day_of_week ManagedLustreFileSystem#day_of_week}.

---

##### `timeOfDayInUtc`<sup>Required</sup> <a name="timeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow.property.timeOfDayInUtc"></a>

```java
public java.lang.String getTimeOfDayInUtc();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#time_of_day_in_utc ManagedLustreFileSystem#time_of_day_in_utc}.

---

### ManagedLustreFileSystemTimeouts <a name="ManagedLustreFileSystemTimeouts" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemTimeouts;

ManagedLustreFileSystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#create ManagedLustreFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#delete ManagedLustreFileSystem#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#read ManagedLustreFileSystem#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/managed_lustre_file_system#update ManagedLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedLustreFileSystemEncryptionKeyOutputReference <a name="ManagedLustreFileSystemEncryptionKeyOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemEncryptionKeyOutputReference;

new ManagedLustreFileSystemEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput">keyUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput">sourceVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl">keyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId">sourceVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyUrlInput`<sup>Optional</sup> <a name="keyUrlInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrlInput"></a>

```java
public java.lang.String getKeyUrlInput();
```

- *Type:* java.lang.String

---

##### `sourceVaultIdInput`<sup>Optional</sup> <a name="sourceVaultIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultIdInput"></a>

```java
public java.lang.String getSourceVaultIdInput();
```

- *Type:* java.lang.String

---

##### `keyUrl`<sup>Required</sup> <a name="keyUrl" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.keyUrl"></a>

```java
public java.lang.String getKeyUrl();
```

- *Type:* java.lang.String

---

##### `sourceVaultId`<sup>Required</sup> <a name="sourceVaultId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.sourceVaultId"></a>

```java
public java.lang.String getSourceVaultId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKeyOutputReference.property.internalValue"></a>

```java
public ManagedLustreFileSystemEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemEncryptionKey">ManagedLustreFileSystemEncryptionKey</a>

---


### ManagedLustreFileSystemHsmSettingOutputReference <a name="ManagedLustreFileSystemHsmSettingOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemHsmSettingOutputReference;

new ManagedLustreFileSystemHsmSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix">resetImportPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImportPrefix` <a name="resetImportPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.resetImportPrefix"></a>

```java
public void resetImportPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput">containerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput">importPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput">loggingContainerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId">containerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix">importPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId">loggingContainerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerIdInput`<sup>Optional</sup> <a name="containerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerIdInput"></a>

```java
public java.lang.String getContainerIdInput();
```

- *Type:* java.lang.String

---

##### `importPrefixInput`<sup>Optional</sup> <a name="importPrefixInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefixInput"></a>

```java
public java.lang.String getImportPrefixInput();
```

- *Type:* java.lang.String

---

##### `loggingContainerIdInput`<sup>Optional</sup> <a name="loggingContainerIdInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerIdInput"></a>

```java
public java.lang.String getLoggingContainerIdInput();
```

- *Type:* java.lang.String

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.containerId"></a>

```java
public java.lang.String getContainerId();
```

- *Type:* java.lang.String

---

##### `importPrefix`<sup>Required</sup> <a name="importPrefix" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.importPrefix"></a>

```java
public java.lang.String getImportPrefix();
```

- *Type:* java.lang.String

---

##### `loggingContainerId`<sup>Required</sup> <a name="loggingContainerId" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.loggingContainerId"></a>

```java
public java.lang.String getLoggingContainerId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSettingOutputReference.property.internalValue"></a>

```java
public ManagedLustreFileSystemHsmSetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemHsmSetting">ManagedLustreFileSystemHsmSetting</a>

---


### ManagedLustreFileSystemIdentityOutputReference <a name="ManagedLustreFileSystemIdentityOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemIdentityOutputReference;

new ManagedLustreFileSystemIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentityOutputReference.property.internalValue"></a>

```java
public ManagedLustreFileSystemIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemIdentity">ManagedLustreFileSystemIdentity</a>

---


### ManagedLustreFileSystemMaintenanceWindowOutputReference <a name="ManagedLustreFileSystemMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemMaintenanceWindowOutputReference;

new ManagedLustreFileSystemMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput">timeOfDayInUtcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc">timeOfDayInUtc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `timeOfDayInUtcInput`<sup>Optional</sup> <a name="timeOfDayInUtcInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtcInput"></a>

```java
public java.lang.String getTimeOfDayInUtcInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `timeOfDayInUtc`<sup>Required</sup> <a name="timeOfDayInUtc" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.timeOfDayInUtc"></a>

```java
public java.lang.String getTimeOfDayInUtc();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public ManagedLustreFileSystemMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemMaintenanceWindow">ManagedLustreFileSystemMaintenanceWindow</a>

---


### ManagedLustreFileSystemTimeoutsOutputReference <a name="ManagedLustreFileSystemTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.managed_lustre_file_system.ManagedLustreFileSystemTimeoutsOutputReference;

new ManagedLustreFileSystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.managedLustreFileSystem.ManagedLustreFileSystemTimeouts">ManagedLustreFileSystemTimeouts</a>

---



