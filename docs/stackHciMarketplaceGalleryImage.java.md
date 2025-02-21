# `stackHciMarketplaceGalleryImage` Submodule <a name="`stackHciMarketplaceGalleryImage` Submodule" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciMarketplaceGalleryImage <a name="StackHciMarketplaceGalleryImage" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image azurerm_stack_hci_marketplace_gallery_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImage;

StackHciMarketplaceGalleryImage.Builder.create(Construct scope, java.lang.String id)
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
    .customLocationId(java.lang.String)
    .hypervGeneration(java.lang.String)
    .identifier(StackHciMarketplaceGalleryImageIdentifier)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .storagePathId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StackHciMarketplaceGalleryImageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.hypervGeneration">hypervGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.storagePathId">storagePathId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.customLocationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}.

---

##### `hypervGeneration`<sup>Required</sup> <a name="hypervGeneration" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.hypervGeneration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.identifier"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#identifier StackHciMarketplaceGalleryImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storagePathId`<sup>Optional</sup> <a name="storagePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.storagePathId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#timeouts StackHciMarketplaceGalleryImage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier">putIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId">resetStoragePathId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentifier` <a name="putIdentifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier"></a>

```java
public void putIdentifier(StackHciMarketplaceGalleryImageIdentifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts"></a>

```java
public void putTimeouts(StackHciMarketplaceGalleryImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId"></a>

```java
public void resetId()
```

##### `resetStoragePathId` <a name="resetStoragePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId"></a>

```java
public void resetStoragePathId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImage;

StackHciMarketplaceGalleryImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImage;

StackHciMarketplaceGalleryImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImage;

StackHciMarketplaceGalleryImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImage;

StackHciMarketplaceGalleryImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StackHciMarketplaceGalleryImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StackHciMarketplaceGalleryImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StackHciMarketplaceGalleryImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StackHciMarketplaceGalleryImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput">customLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput">hypervGenerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput">identifierInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput">storagePathIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration">hypervGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId">storagePathId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier"></a>

```java
public StackHciMarketplaceGalleryImageIdentifierOutputReference getIdentifier();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts"></a>

```java
public StackHciMarketplaceGalleryImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a>

---

##### `customLocationIdInput`<sup>Optional</sup> <a name="customLocationIdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput"></a>

```java
public java.lang.String getCustomLocationIdInput();
```

- *Type:* java.lang.String

---

##### `hypervGenerationInput`<sup>Optional</sup> <a name="hypervGenerationInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput"></a>

```java
public java.lang.String getHypervGenerationInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput"></a>

```java
public StackHciMarketplaceGalleryImageIdentifier getIdentifierInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `storagePathIdInput`<sup>Optional</sup> <a name="storagePathIdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput"></a>

```java
public java.lang.String getStoragePathIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

---

##### `hypervGeneration`<sup>Required</sup> <a name="hypervGeneration" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration"></a>

```java
public java.lang.String getHypervGeneration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `storagePathId`<sup>Required</sup> <a name="storagePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId"></a>

```java
public java.lang.String getStoragePathId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciMarketplaceGalleryImageConfig <a name="StackHciMarketplaceGalleryImageConfig" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImageConfig;

StackHciMarketplaceGalleryImageConfig.builder()
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
    .customLocationId(java.lang.String)
    .hypervGeneration(java.lang.String)
    .identifier(StackHciMarketplaceGalleryImageIdentifier)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .storagePathId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StackHciMarketplaceGalleryImageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId">customLocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration">hypervGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId">storagePathId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customLocationId`<sup>Required</sup> <a name="customLocationId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId"></a>

```java
public java.lang.String getCustomLocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}.

---

##### `hypervGeneration`<sup>Required</sup> <a name="hypervGeneration" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration"></a>

```java
public java.lang.String getHypervGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier"></a>

```java
public StackHciMarketplaceGalleryImageIdentifier getIdentifier();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#identifier StackHciMarketplaceGalleryImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storagePathId`<sup>Optional</sup> <a name="storagePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId"></a>

```java
public java.lang.String getStoragePathId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts"></a>

```java
public StackHciMarketplaceGalleryImageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#timeouts StackHciMarketplaceGalleryImage#timeouts}

---

### StackHciMarketplaceGalleryImageIdentifier <a name="StackHciMarketplaceGalleryImageIdentifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImageIdentifier;

StackHciMarketplaceGalleryImageIdentifier.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}.

---

### StackHciMarketplaceGalleryImageTimeouts <a name="StackHciMarketplaceGalleryImageTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImageTimeouts;

StackHciMarketplaceGalleryImageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciMarketplaceGalleryImageIdentifierOutputReference <a name="StackHciMarketplaceGalleryImageIdentifierOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImageIdentifierOutputReference;

new StackHciMarketplaceGalleryImageIdentifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue"></a>

```java
public StackHciMarketplaceGalleryImageIdentifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---


### StackHciMarketplaceGalleryImageTimeoutsOutputReference <a name="StackHciMarketplaceGalleryImageTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stack_hci_marketplace_gallery_image.StackHciMarketplaceGalleryImageTimeoutsOutputReference;

new StackHciMarketplaceGalleryImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

---



