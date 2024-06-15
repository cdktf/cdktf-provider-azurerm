# `galleryApplicationVersion` Submodule <a name="`galleryApplicationVersion` Submodule" id="@cdktf/provider-azurerm.galleryApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GalleryApplicationVersion <a name="GalleryApplicationVersion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version azurerm_gallery_application_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersion;

GalleryApplicationVersion.Builder.create(Construct scope, java.lang.String id)
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
    .galleryApplicationId(java.lang.String)
    .location(java.lang.String)
    .manageAction(GalleryApplicationVersionManageAction)
    .name(java.lang.String)
    .source(GalleryApplicationVersionSource)
    .targetRegion(IResolvable)
    .targetRegion(java.util.List<GalleryApplicationVersionTargetRegion>)
//  .configFile(java.lang.String)
//  .enableHealthCheck(java.lang.Boolean)
//  .enableHealthCheck(IResolvable)
//  .endOfLifeDate(java.lang.String)
//  .excludeFromLatest(java.lang.Boolean)
//  .excludeFromLatest(IResolvable)
//  .id(java.lang.String)
//  .packageFile(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GalleryApplicationVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.galleryApplicationId">galleryApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.manageAction">manageAction</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | manage_action block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.targetRegion">targetRegion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>></code> | target_region block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.configFile">configFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.enableHealthCheck">enableHealthCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.packageFile">packageFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryApplicationId`<sup>Required</sup> <a name="galleryApplicationId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.galleryApplicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}.

---

##### `manageAction`<sup>Required</sup> <a name="manageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.manageAction"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

manage_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#manage_action GalleryApplicationVersion#manage_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#source GalleryApplicationVersion#source}

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.targetRegion"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>>

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#target_region GalleryApplicationVersion#target_region}

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.configFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}.

---

##### `enableHealthCheck`<sup>Optional</sup> <a name="enableHealthCheck" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.enableHealthCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.endOfLifeDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.excludeFromLatest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageFile`<sup>Optional</sup> <a name="packageFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.packageFile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#timeouts GalleryApplicationVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction">putManageAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion">putTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile">resetConfigFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck">resetEnableHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate">resetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest">resetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile">resetPackageFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putManageAction` <a name="putManageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction"></a>

```java
public void putManageAction(GalleryApplicationVersionManageAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource"></a>

```java
public void putSource(GalleryApplicationVersionSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `putTargetRegion` <a name="putTargetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion"></a>

```java
public void putTargetRegion(IResolvable OR java.util.List<GalleryApplicationVersionTargetRegion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts"></a>

```java
public void putTimeouts(GalleryApplicationVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---

##### `resetConfigFile` <a name="resetConfigFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile"></a>

```java
public void resetConfigFile()
```

##### `resetEnableHealthCheck` <a name="resetEnableHealthCheck" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck"></a>

```java
public void resetEnableHealthCheck()
```

##### `resetEndOfLifeDate` <a name="resetEndOfLifeDate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate"></a>

```java
public void resetEndOfLifeDate()
```

##### `resetExcludeFromLatest` <a name="resetExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest"></a>

```java
public void resetExcludeFromLatest()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId"></a>

```java
public void resetId()
```

##### `resetPackageFile` <a name="resetPackageFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile"></a>

```java
public void resetPackageFile()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GalleryApplicationVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersion;

GalleryApplicationVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersion;

GalleryApplicationVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersion;

GalleryApplicationVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersion;

GalleryApplicationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GalleryApplicationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GalleryApplicationVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GalleryApplicationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GalleryApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GalleryApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction">manageAction</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion">targetRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput">configFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput">enableHealthCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput">endOfLifeDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput">excludeFromLatestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput">galleryApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput">manageActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput">packageFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput">targetRegionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile">configFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck">enableHealthCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId">galleryApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile">packageFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `manageAction`<sup>Required</sup> <a name="manageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction"></a>

```java
public GalleryApplicationVersionManageActionOutputReference getManageAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source"></a>

```java
public GalleryApplicationVersionSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a>

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion"></a>

```java
public GalleryApplicationVersionTargetRegionList getTargetRegion();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts"></a>

```java
public GalleryApplicationVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a>

---

##### `configFileInput`<sup>Optional</sup> <a name="configFileInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput"></a>

```java
public java.lang.String getConfigFileInput();
```

- *Type:* java.lang.String

---

##### `enableHealthCheckInput`<sup>Optional</sup> <a name="enableHealthCheckInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput"></a>

```java
public java.lang.Object getEnableHealthCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endOfLifeDateInput`<sup>Optional</sup> <a name="endOfLifeDateInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput"></a>

```java
public java.lang.String getEndOfLifeDateInput();
```

- *Type:* java.lang.String

---

##### `excludeFromLatestInput`<sup>Optional</sup> <a name="excludeFromLatestInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput"></a>

```java
public java.lang.Object getExcludeFromLatestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryApplicationIdInput`<sup>Optional</sup> <a name="galleryApplicationIdInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput"></a>

```java
public java.lang.String getGalleryApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `manageActionInput`<sup>Optional</sup> <a name="manageActionInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput"></a>

```java
public GalleryApplicationVersionManageAction getManageActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `packageFileInput`<sup>Optional</sup> <a name="packageFileInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput"></a>

```java
public java.lang.String getPackageFileInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput"></a>

```java
public GalleryApplicationVersionSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetRegionInput`<sup>Optional</sup> <a name="targetRegionInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput"></a>

```java
public java.lang.Object getTargetRegionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile"></a>

```java
public java.lang.String getConfigFile();
```

- *Type:* java.lang.String

---

##### `enableHealthCheck`<sup>Required</sup> <a name="enableHealthCheck" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck"></a>

```java
public java.lang.Object getEnableHealthCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endOfLifeDate`<sup>Required</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate"></a>

```java
public java.lang.String getEndOfLifeDate();
```

- *Type:* java.lang.String

---

##### `excludeFromLatest`<sup>Required</sup> <a name="excludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest"></a>

```java
public java.lang.Object getExcludeFromLatest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryApplicationId`<sup>Required</sup> <a name="galleryApplicationId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId"></a>

```java
public java.lang.String getGalleryApplicationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packageFile`<sup>Required</sup> <a name="packageFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile"></a>

```java
public java.lang.String getPackageFile();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GalleryApplicationVersionConfig <a name="GalleryApplicationVersionConfig" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionConfig;

GalleryApplicationVersionConfig.builder()
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
    .galleryApplicationId(java.lang.String)
    .location(java.lang.String)
    .manageAction(GalleryApplicationVersionManageAction)
    .name(java.lang.String)
    .source(GalleryApplicationVersionSource)
    .targetRegion(IResolvable)
    .targetRegion(java.util.List<GalleryApplicationVersionTargetRegion>)
//  .configFile(java.lang.String)
//  .enableHealthCheck(java.lang.Boolean)
//  .enableHealthCheck(IResolvable)
//  .endOfLifeDate(java.lang.String)
//  .excludeFromLatest(java.lang.Boolean)
//  .excludeFromLatest(IResolvable)
//  .id(java.lang.String)
//  .packageFile(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GalleryApplicationVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId">galleryApplicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction">manageAction</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | manage_action block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion">targetRegion</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>></code> | target_region block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile">configFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck">enableHealthCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile">packageFile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryApplicationId`<sup>Required</sup> <a name="galleryApplicationId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId"></a>

```java
public java.lang.String getGalleryApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}.

---

##### `manageAction`<sup>Required</sup> <a name="manageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction"></a>

```java
public GalleryApplicationVersionManageAction getManageAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

manage_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#manage_action GalleryApplicationVersion#manage_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source"></a>

```java
public GalleryApplicationVersionSource getSource();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#source GalleryApplicationVersion#source}

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion"></a>

```java
public java.lang.Object getTargetRegion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>>

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#target_region GalleryApplicationVersion#target_region}

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile"></a>

```java
public java.lang.String getConfigFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}.

---

##### `enableHealthCheck`<sup>Optional</sup> <a name="enableHealthCheck" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck"></a>

```java
public java.lang.Object getEnableHealthCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate"></a>

```java
public java.lang.String getEndOfLifeDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest"></a>

```java
public java.lang.Object getExcludeFromLatest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packageFile`<sup>Optional</sup> <a name="packageFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile"></a>

```java
public java.lang.String getPackageFile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts"></a>

```java
public GalleryApplicationVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#timeouts GalleryApplicationVersion#timeouts}

---

### GalleryApplicationVersionManageAction <a name="GalleryApplicationVersionManageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionManageAction;

GalleryApplicationVersionManageAction.builder()
    .install(java.lang.String)
    .remove(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install">install</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove">remove</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `install`<sup>Required</sup> <a name="install" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install"></a>

```java
public java.lang.String getInstall();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}.

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove"></a>

```java
public java.lang.String getRemove();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

### GalleryApplicationVersionSource <a name="GalleryApplicationVersionSource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionSource;

GalleryApplicationVersionSource.builder()
    .mediaLink(java.lang.String)
//  .defaultConfigurationLink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink">mediaLink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink">defaultConfigurationLink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}. |

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink"></a>

```java
public java.lang.String getMediaLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}.

---

##### `defaultConfigurationLink`<sup>Optional</sup> <a name="defaultConfigurationLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink"></a>

```java
public java.lang.String getDefaultConfigurationLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}.

---

### GalleryApplicationVersionTargetRegion <a name="GalleryApplicationVersionTargetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionTargetRegion;

GalleryApplicationVersionTargetRegion.builder()
    .name(java.lang.String)
    .regionalReplicaCount(java.lang.Number)
//  .excludeFromLatest(java.lang.Boolean)
//  .excludeFromLatest(IResolvable)
//  .storageAccountType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount"></a>

```java
public java.lang.Number getRegionalReplicaCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}.

---

##### `excludeFromLatest`<sup>Optional</sup> <a name="excludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest"></a>

```java
public java.lang.Object getExcludeFromLatest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}.

---

### GalleryApplicationVersionTimeouts <a name="GalleryApplicationVersionTimeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionTimeouts;

GalleryApplicationVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GalleryApplicationVersionManageActionOutputReference <a name="GalleryApplicationVersionManageActionOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionManageActionOutputReference;

new GalleryApplicationVersionManageActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput">installInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput">removeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install">install</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove">remove</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `installInput`<sup>Optional</sup> <a name="installInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput"></a>

```java
public java.lang.String getInstallInput();
```

- *Type:* java.lang.String

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput"></a>

```java
public java.lang.String getRemoveInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `install`<sup>Required</sup> <a name="install" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install"></a>

```java
public java.lang.String getInstall();
```

- *Type:* java.lang.String

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove"></a>

```java
public java.lang.String getRemove();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue"></a>

```java
public GalleryApplicationVersionManageAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---


### GalleryApplicationVersionSourceOutputReference <a name="GalleryApplicationVersionSourceOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionSourceOutputReference;

new GalleryApplicationVersionSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink">resetDefaultConfigurationLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultConfigurationLink` <a name="resetDefaultConfigurationLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink"></a>

```java
public void resetDefaultConfigurationLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput">defaultConfigurationLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput">mediaLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink">defaultConfigurationLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink">mediaLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultConfigurationLinkInput`<sup>Optional</sup> <a name="defaultConfigurationLinkInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput"></a>

```java
public java.lang.String getDefaultConfigurationLinkInput();
```

- *Type:* java.lang.String

---

##### `mediaLinkInput`<sup>Optional</sup> <a name="mediaLinkInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput"></a>

```java
public java.lang.String getMediaLinkInput();
```

- *Type:* java.lang.String

---

##### `defaultConfigurationLink`<sup>Required</sup> <a name="defaultConfigurationLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink"></a>

```java
public java.lang.String getDefaultConfigurationLink();
```

- *Type:* java.lang.String

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink"></a>

```java
public java.lang.String getMediaLink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue"></a>

```java
public GalleryApplicationVersionSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---


### GalleryApplicationVersionTargetRegionList <a name="GalleryApplicationVersionTargetRegionList" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionTargetRegionList;

new GalleryApplicationVersionTargetRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get"></a>

```java
public GalleryApplicationVersionTargetRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>>

---


### GalleryApplicationVersionTargetRegionOutputReference <a name="GalleryApplicationVersionTargetRegionOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionTargetRegionOutputReference;

new GalleryApplicationVersionTargetRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest">resetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeFromLatest` <a name="resetExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest"></a>

```java
public void resetExcludeFromLatest()
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```java
public void resetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput">excludeFromLatestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput">regionalReplicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest">excludeFromLatest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount">regionalReplicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeFromLatestInput`<sup>Optional</sup> <a name="excludeFromLatestInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput"></a>

```java
public java.lang.Object getExcludeFromLatestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionalReplicaCountInput`<sup>Optional</sup> <a name="regionalReplicaCountInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```java
public java.lang.Number getRegionalReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```java
public java.lang.String getStorageAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `excludeFromLatest`<sup>Required</sup> <a name="excludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest"></a>

```java
public java.lang.Object getExcludeFromLatest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regionalReplicaCount`<sup>Required</sup> <a name="regionalReplicaCount" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```java
public java.lang.Number getRegionalReplicaCount();
```

- *Type:* java.lang.Number

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType"></a>

```java
public java.lang.String getStorageAccountType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion">GalleryApplicationVersionTargetRegion</a>

---


### GalleryApplicationVersionTimeoutsOutputReference <a name="GalleryApplicationVersionTimeoutsOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.gallery_application_version.GalleryApplicationVersionTimeoutsOutputReference;

new GalleryApplicationVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---



