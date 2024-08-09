# `mediaAssetFilter` Submodule <a name="`mediaAssetFilter` Submodule" id="@cdktf/provider-azurerm.mediaAssetFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaAssetFilter <a name="MediaAssetFilter" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter azurerm_media_asset_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilter;

MediaAssetFilter.Builder.create(Construct scope, java.lang.String id)
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
    .assetId(java.lang.String)
    .name(java.lang.String)
//  .firstQualityBitrate(java.lang.Number)
//  .id(java.lang.String)
//  .presentationTimeRange(MediaAssetFilterPresentationTimeRange)
//  .timeouts(MediaAssetFilterTimeouts)
//  .trackSelection(IResolvable)
//  .trackSelection(java.util.List<MediaAssetFilterTrackSelection>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.assetId">assetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.firstQualityBitrate">firstQualityBitrate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.presentationTimeRange">presentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.trackSelection">trackSelection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>></code> | track_selection block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.assetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}.

---

##### `firstQualityBitrate`<sup>Optional</sup> <a name="firstQualityBitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.firstQualityBitrate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentationTimeRange`<sup>Optional</sup> <a name="presentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.presentationTimeRange"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#presentation_time_range MediaAssetFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#timeouts MediaAssetFilter#timeouts}

---

##### `trackSelection`<sup>Optional</sup> <a name="trackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.Initializer.parameter.trackSelection"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>>

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#track_selection MediaAssetFilter#track_selection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange">putPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection">putTrackSelection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetFirstQualityBitrate">resetFirstQualityBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetPresentationTimeRange">resetPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTrackSelection">resetTrackSelection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPresentationTimeRange` <a name="putPresentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange"></a>

```java
public void putPresentationTimeRange(MediaAssetFilterPresentationTimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putPresentationTimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts"></a>

```java
public void putTimeouts(MediaAssetFilterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

---

##### `putTrackSelection` <a name="putTrackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection"></a>

```java
public void putTrackSelection(IResolvable OR java.util.List<MediaAssetFilterTrackSelection> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.putTrackSelection.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>>

---

##### `resetFirstQualityBitrate` <a name="resetFirstQualityBitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetFirstQualityBitrate"></a>

```java
public void resetFirstQualityBitrate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetId"></a>

```java
public void resetId()
```

##### `resetPresentationTimeRange` <a name="resetPresentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetPresentationTimeRange"></a>

```java
public void resetPresentationTimeRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrackSelection` <a name="resetTrackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.resetTrackSelection"></a>

```java
public void resetTrackSelection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaAssetFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilter;

MediaAssetFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilter;

MediaAssetFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilter;

MediaAssetFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilter;

MediaAssetFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaAssetFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MediaAssetFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaAssetFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaAssetFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MediaAssetFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRange">presentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference">MediaAssetFilterPresentationTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference">MediaAssetFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelection">trackSelection</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList">MediaAssetFilterTrackSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetIdInput">assetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrateInput">firstQualityBitrateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRangeInput">presentationTimeRangeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelectionInput">trackSelectionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetId">assetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrate">firstQualityBitrate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `presentationTimeRange`<sup>Required</sup> <a name="presentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRange"></a>

```java
public MediaAssetFilterPresentationTimeRangeOutputReference getPresentationTimeRange();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference">MediaAssetFilterPresentationTimeRangeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeouts"></a>

```java
public MediaAssetFilterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference">MediaAssetFilterTimeoutsOutputReference</a>

---

##### `trackSelection`<sup>Required</sup> <a name="trackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelection"></a>

```java
public MediaAssetFilterTrackSelectionList getTrackSelection();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList">MediaAssetFilterTrackSelectionList</a>

---

##### `assetIdInput`<sup>Optional</sup> <a name="assetIdInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetIdInput"></a>

```java
public java.lang.String getAssetIdInput();
```

- *Type:* java.lang.String

---

##### `firstQualityBitrateInput`<sup>Optional</sup> <a name="firstQualityBitrateInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrateInput"></a>

```java
public java.lang.Number getFirstQualityBitrateInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `presentationTimeRangeInput`<sup>Optional</sup> <a name="presentationTimeRangeInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.presentationTimeRangeInput"></a>

```java
public MediaAssetFilterPresentationTimeRange getPresentationTimeRangeInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

---

##### `trackSelectionInput`<sup>Optional</sup> <a name="trackSelectionInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.trackSelectionInput"></a>

```java
public java.lang.Object getTrackSelectionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

---

##### `firstQualityBitrate`<sup>Required</sup> <a name="firstQualityBitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.firstQualityBitrate"></a>

```java
public java.lang.Number getFirstQualityBitrate();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaAssetFilterConfig <a name="MediaAssetFilterConfig" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterConfig;

MediaAssetFilterConfig.builder()
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
    .assetId(java.lang.String)
    .name(java.lang.String)
//  .firstQualityBitrate(java.lang.Number)
//  .id(java.lang.String)
//  .presentationTimeRange(MediaAssetFilterPresentationTimeRange)
//  .timeouts(MediaAssetFilterTimeouts)
//  .trackSelection(IResolvable)
//  .trackSelection(java.util.List<MediaAssetFilterTrackSelection>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.assetId">assetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.firstQualityBitrate">firstQualityBitrate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.presentationTimeRange">presentationTimeRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | presentation_time_range block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.trackSelection">trackSelection</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>></code> | track_selection block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.assetId"></a>

```java
public java.lang.String getAssetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#asset_id MediaAssetFilter#asset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#name MediaAssetFilter#name}.

---

##### `firstQualityBitrate`<sup>Optional</sup> <a name="firstQualityBitrate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.firstQualityBitrate"></a>

```java
public java.lang.Number getFirstQualityBitrate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#first_quality_bitrate MediaAssetFilter#first_quality_bitrate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#id MediaAssetFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `presentationTimeRange`<sup>Optional</sup> <a name="presentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.presentationTimeRange"></a>

```java
public MediaAssetFilterPresentationTimeRange getPresentationTimeRange();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

presentation_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#presentation_time_range MediaAssetFilter#presentation_time_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.timeouts"></a>

```java
public MediaAssetFilterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#timeouts MediaAssetFilter#timeouts}

---

##### `trackSelection`<sup>Optional</sup> <a name="trackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterConfig.property.trackSelection"></a>

```java
public java.lang.Object getTrackSelection();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>>

track_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#track_selection MediaAssetFilter#track_selection}

---

### MediaAssetFilterPresentationTimeRange <a name="MediaAssetFilterPresentationTimeRange" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterPresentationTimeRange;

MediaAssetFilterPresentationTimeRange.builder()
//  .endInUnits(java.lang.Number)
//  .forceEnd(java.lang.Boolean)
//  .forceEnd(IResolvable)
//  .liveBackoffInUnits(java.lang.Number)
//  .presentationWindowInUnits(java.lang.Number)
//  .startInUnits(java.lang.Number)
//  .unitTimescaleInMiliseconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.endInUnits">endInUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.forceEnd">forceEnd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.liveBackoffInUnits">liveBackoffInUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.presentationWindowInUnits">presentationWindowInUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.startInUnits">startInUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.unitTimescaleInMiliseconds">unitTimescaleInMiliseconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}. |

---

##### `endInUnits`<sup>Optional</sup> <a name="endInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.endInUnits"></a>

```java
public java.lang.Number getEndInUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#end_in_units MediaAssetFilter#end_in_units}.

---

##### `forceEnd`<sup>Optional</sup> <a name="forceEnd" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.forceEnd"></a>

```java
public java.lang.Object getForceEnd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#force_end MediaAssetFilter#force_end}.

---

##### `liveBackoffInUnits`<sup>Optional</sup> <a name="liveBackoffInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.liveBackoffInUnits"></a>

```java
public java.lang.Number getLiveBackoffInUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#live_backoff_in_units MediaAssetFilter#live_backoff_in_units}.

---

##### `presentationWindowInUnits`<sup>Optional</sup> <a name="presentationWindowInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.presentationWindowInUnits"></a>

```java
public java.lang.Number getPresentationWindowInUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#presentation_window_in_units MediaAssetFilter#presentation_window_in_units}.

---

##### `startInUnits`<sup>Optional</sup> <a name="startInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.startInUnits"></a>

```java
public java.lang.Number getStartInUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#start_in_units MediaAssetFilter#start_in_units}.

---

##### `unitTimescaleInMiliseconds`<sup>Optional</sup> <a name="unitTimescaleInMiliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange.property.unitTimescaleInMiliseconds"></a>

```java
public java.lang.Number getUnitTimescaleInMiliseconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#unit_timescale_in_miliseconds MediaAssetFilter#unit_timescale_in_miliseconds}.

---

### MediaAssetFilterTimeouts <a name="MediaAssetFilterTimeouts" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTimeouts;

MediaAssetFilterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#create MediaAssetFilter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#delete MediaAssetFilter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#read MediaAssetFilter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#update MediaAssetFilter#update}.

---

### MediaAssetFilterTrackSelection <a name="MediaAssetFilterTrackSelection" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTrackSelection;

MediaAssetFilterTrackSelection.builder()
    .condition(IResolvable)
    .condition(java.util.List<MediaAssetFilterTrackSelectionCondition>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>></code> | condition block. |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#condition MediaAssetFilter#condition}

---

### MediaAssetFilterTrackSelectionCondition <a name="MediaAssetFilterTrackSelectionCondition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTrackSelectionCondition;

MediaAssetFilterTrackSelectionCondition.builder()
//  .operation(java.lang.String)
//  .property(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#operation MediaAssetFilter#operation}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.property">property</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#property MediaAssetFilter#property}. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#value MediaAssetFilter#value}. |

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#operation MediaAssetFilter#operation}.

---

##### `property`<sup>Optional</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#property MediaAssetFilter#property}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/media_asset_filter#value MediaAssetFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaAssetFilterPresentationTimeRangeOutputReference <a name="MediaAssetFilterPresentationTimeRangeOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterPresentationTimeRangeOutputReference;

new MediaAssetFilterPresentationTimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetEndInUnits">resetEndInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetForceEnd">resetForceEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits">resetLiveBackoffInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits">resetPresentationWindowInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetStartInUnits">resetStartInUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetUnitTimescaleInMiliseconds">resetUnitTimescaleInMiliseconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndInUnits` <a name="resetEndInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetEndInUnits"></a>

```java
public void resetEndInUnits()
```

##### `resetForceEnd` <a name="resetForceEnd" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetForceEnd"></a>

```java
public void resetForceEnd()
```

##### `resetLiveBackoffInUnits` <a name="resetLiveBackoffInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetLiveBackoffInUnits"></a>

```java
public void resetLiveBackoffInUnits()
```

##### `resetPresentationWindowInUnits` <a name="resetPresentationWindowInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetPresentationWindowInUnits"></a>

```java
public void resetPresentationWindowInUnits()
```

##### `resetStartInUnits` <a name="resetStartInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetStartInUnits"></a>

```java
public void resetStartInUnits()
```

##### `resetUnitTimescaleInMiliseconds` <a name="resetUnitTimescaleInMiliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.resetUnitTimescaleInMiliseconds"></a>

```java
public void resetUnitTimescaleInMiliseconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnitsInput">endInUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEndInput">forceEndInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput">liveBackoffInUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput">presentationWindowInUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnitsInput">startInUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilisecondsInput">unitTimescaleInMilisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnits">endInUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEnd">forceEnd</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits">liveBackoffInUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits">presentationWindowInUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnits">startInUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMiliseconds">unitTimescaleInMiliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInUnitsInput`<sup>Optional</sup> <a name="endInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnitsInput"></a>

```java
public java.lang.Number getEndInUnitsInput();
```

- *Type:* java.lang.Number

---

##### `forceEndInput`<sup>Optional</sup> <a name="forceEndInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEndInput"></a>

```java
public java.lang.Object getForceEndInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveBackoffInUnitsInput`<sup>Optional</sup> <a name="liveBackoffInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnitsInput"></a>

```java
public java.lang.Number getLiveBackoffInUnitsInput();
```

- *Type:* java.lang.Number

---

##### `presentationWindowInUnitsInput`<sup>Optional</sup> <a name="presentationWindowInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnitsInput"></a>

```java
public java.lang.Number getPresentationWindowInUnitsInput();
```

- *Type:* java.lang.Number

---

##### `startInUnitsInput`<sup>Optional</sup> <a name="startInUnitsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnitsInput"></a>

```java
public java.lang.Number getStartInUnitsInput();
```

- *Type:* java.lang.Number

---

##### `unitTimescaleInMilisecondsInput`<sup>Optional</sup> <a name="unitTimescaleInMilisecondsInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMilisecondsInput"></a>

```java
public java.lang.Number getUnitTimescaleInMilisecondsInput();
```

- *Type:* java.lang.Number

---

##### `endInUnits`<sup>Required</sup> <a name="endInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.endInUnits"></a>

```java
public java.lang.Number getEndInUnits();
```

- *Type:* java.lang.Number

---

##### `forceEnd`<sup>Required</sup> <a name="forceEnd" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.forceEnd"></a>

```java
public java.lang.Object getForceEnd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `liveBackoffInUnits`<sup>Required</sup> <a name="liveBackoffInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.liveBackoffInUnits"></a>

```java
public java.lang.Number getLiveBackoffInUnits();
```

- *Type:* java.lang.Number

---

##### `presentationWindowInUnits`<sup>Required</sup> <a name="presentationWindowInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.presentationWindowInUnits"></a>

```java
public java.lang.Number getPresentationWindowInUnits();
```

- *Type:* java.lang.Number

---

##### `startInUnits`<sup>Required</sup> <a name="startInUnits" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.startInUnits"></a>

```java
public java.lang.Number getStartInUnits();
```

- *Type:* java.lang.Number

---

##### `unitTimescaleInMiliseconds`<sup>Required</sup> <a name="unitTimescaleInMiliseconds" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.unitTimescaleInMiliseconds"></a>

```java
public java.lang.Number getUnitTimescaleInMiliseconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRangeOutputReference.property.internalValue"></a>

```java
public MediaAssetFilterPresentationTimeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterPresentationTimeRange">MediaAssetFilterPresentationTimeRange</a>

---


### MediaAssetFilterTimeoutsOutputReference <a name="MediaAssetFilterTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTimeoutsOutputReference;

new MediaAssetFilterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTimeouts">MediaAssetFilterTimeouts</a>

---


### MediaAssetFilterTrackSelectionConditionList <a name="MediaAssetFilterTrackSelectionConditionList" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTrackSelectionConditionList;

new MediaAssetFilterTrackSelectionConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get"></a>

```java
public MediaAssetFilterTrackSelectionConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>>

---


### MediaAssetFilterTrackSelectionConditionOutputReference <a name="MediaAssetFilterTrackSelectionConditionOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTrackSelectionConditionOutputReference;

new MediaAssetFilterTrackSelectionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetProperty">resetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperation` <a name="resetOperation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetOperation"></a>

```java
public void resetOperation()
```

##### `resetProperty` <a name="resetProperty" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetProperty"></a>

```java
public void resetProperty()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.propertyInput">propertyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.property">property</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.propertyInput"></a>

```java
public java.lang.String getPropertyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.property"></a>

```java
public java.lang.String getProperty();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>

---


### MediaAssetFilterTrackSelectionList <a name="MediaAssetFilterTrackSelectionList" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTrackSelectionList;

new MediaAssetFilterTrackSelectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get"></a>

```java
public MediaAssetFilterTrackSelectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>>

---


### MediaAssetFilterTrackSelectionOutputReference <a name="MediaAssetFilterTrackSelectionOutputReference" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_asset_filter.MediaAssetFilterTrackSelectionOutputReference;

new MediaAssetFilterTrackSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<MediaAssetFilterTrackSelectionCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList">MediaAssetFilterTrackSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.condition"></a>

```java
public MediaAssetFilterTrackSelectionConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionConditionList">MediaAssetFilterTrackSelectionConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionCondition">MediaAssetFilterTrackSelectionCondition</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelectionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaAssetFilter.MediaAssetFilterTrackSelection">MediaAssetFilterTrackSelection</a>

---



