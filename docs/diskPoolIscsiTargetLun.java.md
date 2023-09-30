# `azurerm_disk_pool_iscsi_target_lun`

Refer to the Terraform Registory for docs: [`azurerm_disk_pool_iscsi_target_lun`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun).

# `diskPoolIscsiTargetLun` Submodule <a name="`diskPoolIscsiTargetLun` Submodule" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiskPoolIscsiTargetLun <a name="DiskPoolIscsiTargetLun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun azurerm_disk_pool_iscsi_target_lun}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.disk_pool_iscsi_target_lun.DiskPoolIscsiTargetLun;

DiskPoolIscsiTargetLun.Builder.create(Construct scope, java.lang.String id)
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
    .diskPoolManagedDiskAttachmentId(java.lang.String)
    .iscsiTargetId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DiskPoolIscsiTargetLunTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.diskPoolManagedDiskAttachmentId">diskPoolManagedDiskAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.iscsiTargetId">iscsiTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskPoolManagedDiskAttachmentId`<sup>Required</sup> <a name="diskPoolManagedDiskAttachmentId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.diskPoolManagedDiskAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}.

---

##### `iscsiTargetId`<sup>Required</sup> <a name="iscsiTargetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.iscsiTargetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#timeouts DiskPoolIscsiTargetLun#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts"></a>

```java
public void putTimeouts(DiskPoolIscsiTargetLunTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.disk_pool_iscsi_target_lun.DiskPoolIscsiTargetLun;

DiskPoolIscsiTargetLun.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.disk_pool_iscsi_target_lun.DiskPoolIscsiTargetLun;

DiskPoolIscsiTargetLun.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.disk_pool_iscsi_target_lun.DiskPoolIscsiTargetLun;

DiskPoolIscsiTargetLun.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput">diskPoolManagedDiskAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput">iscsiTargetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId">diskPoolManagedDiskAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId">iscsiTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts"></a>

```java
public DiskPoolIscsiTargetLunTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a>

---

##### `diskPoolManagedDiskAttachmentIdInput`<sup>Optional</sup> <a name="diskPoolManagedDiskAttachmentIdInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput"></a>

```java
public java.lang.String getDiskPoolManagedDiskAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iscsiTargetIdInput`<sup>Optional</sup> <a name="iscsiTargetIdInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput"></a>

```java
public java.lang.String getIscsiTargetIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

---

##### `diskPoolManagedDiskAttachmentId`<sup>Required</sup> <a name="diskPoolManagedDiskAttachmentId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId"></a>

```java
public java.lang.String getDiskPoolManagedDiskAttachmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iscsiTargetId`<sup>Required</sup> <a name="iscsiTargetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId"></a>

```java
public java.lang.String getIscsiTargetId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiskPoolIscsiTargetLunConfig <a name="DiskPoolIscsiTargetLunConfig" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.disk_pool_iscsi_target_lun.DiskPoolIscsiTargetLunConfig;

DiskPoolIscsiTargetLunConfig.builder()
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
    .diskPoolManagedDiskAttachmentId(java.lang.String)
    .iscsiTargetId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DiskPoolIscsiTargetLunTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId">diskPoolManagedDiskAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId">iscsiTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskPoolManagedDiskAttachmentId`<sup>Required</sup> <a name="diskPoolManagedDiskAttachmentId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId"></a>

```java
public java.lang.String getDiskPoolManagedDiskAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}.

---

##### `iscsiTargetId`<sup>Required</sup> <a name="iscsiTargetId" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId"></a>

```java
public java.lang.String getIscsiTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts"></a>

```java
public DiskPoolIscsiTargetLunTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#timeouts DiskPoolIscsiTargetLun#timeouts}

---

### DiskPoolIscsiTargetLunTimeouts <a name="DiskPoolIscsiTargetLunTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.disk_pool_iscsi_target_lun.DiskPoolIscsiTargetLunTimeouts;

DiskPoolIscsiTargetLunTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiskPoolIscsiTargetLunTimeoutsOutputReference <a name="DiskPoolIscsiTargetLunTimeoutsOutputReference" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.disk_pool_iscsi_target_lun.DiskPoolIscsiTargetLunTimeoutsOutputReference;

new DiskPoolIscsiTargetLunTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

---



