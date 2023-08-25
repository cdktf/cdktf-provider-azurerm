# `azurerm_media_live_event_output`

Refer to the Terraform Registory for docs: [`azurerm_media_live_event_output`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output).

# `mediaLiveEventOutput` Submodule <a name="`mediaLiveEventOutput` Submodule" id="@cdktf/provider-azurerm.mediaLiveEventOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaLiveEventOutput <a name="MediaLiveEventOutput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output azurerm_media_live_event_output}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_live_event_output.MediaLiveEventOutput;

MediaLiveEventOutput.Builder.create(Construct scope, java.lang.String id)
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
    .archiveWindowDuration(java.lang.String)
    .assetName(java.lang.String)
    .liveEventId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .hlsFragmentsPerTsSegment(java.lang.Number)
//  .id(java.lang.String)
//  .manifestName(java.lang.String)
//  .outputSnapTimeInSeconds(java.lang.Number)
//  .rewindWindowDuration(java.lang.String)
//  .timeouts(MediaLiveEventOutputTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.archiveWindowDuration">archiveWindowDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.assetName">assetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.liveEventId">liveEventId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.hlsFragmentsPerTsSegment">hlsFragmentsPerTsSegment</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.manifestName">manifestName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.outputSnapTimeInSeconds">outputSnapTimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.rewindWindowDuration">rewindWindowDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archiveWindowDuration`<sup>Required</sup> <a name="archiveWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.archiveWindowDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}.

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.assetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}.

---

##### `liveEventId`<sup>Required</sup> <a name="liveEventId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.liveEventId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}.

---

##### `hlsFragmentsPerTsSegment`<sup>Optional</sup> <a name="hlsFragmentsPerTsSegment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.hlsFragmentsPerTsSegment"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manifestName`<sup>Optional</sup> <a name="manifestName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.manifestName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}.

---

##### `outputSnapTimeInSeconds`<sup>Optional</sup> <a name="outputSnapTimeInSeconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.outputSnapTimeInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}.

---

##### `rewindWindowDuration`<sup>Optional</sup> <a name="rewindWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.rewindWindowDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#timeouts MediaLiveEventOutput#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetHlsFragmentsPerTsSegment">resetHlsFragmentsPerTsSegment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetManifestName">resetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOutputSnapTimeInSeconds">resetOutputSnapTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetRewindWindowDuration">resetRewindWindowDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts"></a>

```java
public void putTimeouts(MediaLiveEventOutputTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHlsFragmentsPerTsSegment` <a name="resetHlsFragmentsPerTsSegment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetHlsFragmentsPerTsSegment"></a>

```java
public void resetHlsFragmentsPerTsSegment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetId"></a>

```java
public void resetId()
```

##### `resetManifestName` <a name="resetManifestName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetManifestName"></a>

```java
public void resetManifestName()
```

##### `resetOutputSnapTimeInSeconds` <a name="resetOutputSnapTimeInSeconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetOutputSnapTimeInSeconds"></a>

```java
public void resetOutputSnapTimeInSeconds()
```

##### `resetRewindWindowDuration` <a name="resetRewindWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetRewindWindowDuration"></a>

```java
public void resetRewindWindowDuration()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_live_event_output.MediaLiveEventOutput;

MediaLiveEventOutput.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_live_event_output.MediaLiveEventOutput;

MediaLiveEventOutput.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_live_event_output.MediaLiveEventOutput;

MediaLiveEventOutput.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference">MediaLiveEventOutputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDurationInput">archiveWindowDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetNameInput">assetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegmentInput">hlsFragmentsPerTsSegmentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventIdInput">liveEventIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestNameInput">manifestNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSecondsInput">outputSnapTimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDurationInput">rewindWindowDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDuration">archiveWindowDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetName">assetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegment">hlsFragmentsPerTsSegment</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventId">liveEventId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestName">manifestName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSeconds">outputSnapTimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDuration">rewindWindowDuration</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeouts"></a>

```java
public MediaLiveEventOutputTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference">MediaLiveEventOutputTimeoutsOutputReference</a>

---

##### `archiveWindowDurationInput`<sup>Optional</sup> <a name="archiveWindowDurationInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDurationInput"></a>

```java
public java.lang.String getArchiveWindowDurationInput();
```

- *Type:* java.lang.String

---

##### `assetNameInput`<sup>Optional</sup> <a name="assetNameInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetNameInput"></a>

```java
public java.lang.String getAssetNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hlsFragmentsPerTsSegmentInput`<sup>Optional</sup> <a name="hlsFragmentsPerTsSegmentInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegmentInput"></a>

```java
public java.lang.Number getHlsFragmentsPerTsSegmentInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `liveEventIdInput`<sup>Optional</sup> <a name="liveEventIdInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventIdInput"></a>

```java
public java.lang.String getLiveEventIdInput();
```

- *Type:* java.lang.String

---

##### `manifestNameInput`<sup>Optional</sup> <a name="manifestNameInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestNameInput"></a>

```java
public java.lang.String getManifestNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputSnapTimeInSecondsInput`<sup>Optional</sup> <a name="outputSnapTimeInSecondsInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSecondsInput"></a>

```java
public java.lang.Number getOutputSnapTimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `rewindWindowDurationInput`<sup>Optional</sup> <a name="rewindWindowDurationInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDurationInput"></a>

```java
public java.lang.String getRewindWindowDurationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

---

##### `archiveWindowDuration`<sup>Required</sup> <a name="archiveWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.archiveWindowDuration"></a>

```java
public java.lang.String getArchiveWindowDuration();
```

- *Type:* java.lang.String

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.assetName"></a>

```java
public java.lang.String getAssetName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hlsFragmentsPerTsSegment`<sup>Required</sup> <a name="hlsFragmentsPerTsSegment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.hlsFragmentsPerTsSegment"></a>

```java
public java.lang.Number getHlsFragmentsPerTsSegment();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `liveEventId`<sup>Required</sup> <a name="liveEventId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.liveEventId"></a>

```java
public java.lang.String getLiveEventId();
```

- *Type:* java.lang.String

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.manifestName"></a>

```java
public java.lang.String getManifestName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputSnapTimeInSeconds`<sup>Required</sup> <a name="outputSnapTimeInSeconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.outputSnapTimeInSeconds"></a>

```java
public java.lang.Number getOutputSnapTimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `rewindWindowDuration`<sup>Required</sup> <a name="rewindWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.rewindWindowDuration"></a>

```java
public java.lang.String getRewindWindowDuration();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutput.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaLiveEventOutputConfig <a name="MediaLiveEventOutputConfig" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_live_event_output.MediaLiveEventOutputConfig;

MediaLiveEventOutputConfig.builder()
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
    .archiveWindowDuration(java.lang.String)
    .assetName(java.lang.String)
    .liveEventId(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .hlsFragmentsPerTsSegment(java.lang.Number)
//  .id(java.lang.String)
//  .manifestName(java.lang.String)
//  .outputSnapTimeInSeconds(java.lang.Number)
//  .rewindWindowDuration(java.lang.String)
//  .timeouts(MediaLiveEventOutputTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.archiveWindowDuration">archiveWindowDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.assetName">assetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.liveEventId">liveEventId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.hlsFragmentsPerTsSegment">hlsFragmentsPerTsSegment</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.manifestName">manifestName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.outputSnapTimeInSeconds">outputSnapTimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.rewindWindowDuration">rewindWindowDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archiveWindowDuration`<sup>Required</sup> <a name="archiveWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.archiveWindowDuration"></a>

```java
public java.lang.String getArchiveWindowDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#archive_window_duration MediaLiveEventOutput#archive_window_duration}.

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.assetName"></a>

```java
public java.lang.String getAssetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#asset_name MediaLiveEventOutput#asset_name}.

---

##### `liveEventId`<sup>Required</sup> <a name="liveEventId" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.liveEventId"></a>

```java
public java.lang.String getLiveEventId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#live_event_id MediaLiveEventOutput#live_event_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#name MediaLiveEventOutput#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#description MediaLiveEventOutput#description}.

---

##### `hlsFragmentsPerTsSegment`<sup>Optional</sup> <a name="hlsFragmentsPerTsSegment" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.hlsFragmentsPerTsSegment"></a>

```java
public java.lang.Number getHlsFragmentsPerTsSegment();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#hls_fragments_per_ts_segment MediaLiveEventOutput#hls_fragments_per_ts_segment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#id MediaLiveEventOutput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manifestName`<sup>Optional</sup> <a name="manifestName" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.manifestName"></a>

```java
public java.lang.String getManifestName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#manifest_name MediaLiveEventOutput#manifest_name}.

---

##### `outputSnapTimeInSeconds`<sup>Optional</sup> <a name="outputSnapTimeInSeconds" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.outputSnapTimeInSeconds"></a>

```java
public java.lang.Number getOutputSnapTimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#output_snap_time_in_seconds MediaLiveEventOutput#output_snap_time_in_seconds}.

---

##### `rewindWindowDuration`<sup>Optional</sup> <a name="rewindWindowDuration" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.rewindWindowDuration"></a>

```java
public java.lang.String getRewindWindowDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#rewind_window_duration MediaLiveEventOutput#rewind_window_duration}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputConfig.property.timeouts"></a>

```java
public MediaLiveEventOutputTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#timeouts MediaLiveEventOutput#timeouts}

---

### MediaLiveEventOutputTimeouts <a name="MediaLiveEventOutputTimeouts" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_live_event_output.MediaLiveEventOutputTimeouts;

MediaLiveEventOutputTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#update MediaLiveEventOutput#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#create MediaLiveEventOutput#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#delete MediaLiveEventOutput#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#read MediaLiveEventOutput#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/media_live_event_output#update MediaLiveEventOutput#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaLiveEventOutputTimeoutsOutputReference <a name="MediaLiveEventOutputTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_live_event_output.MediaLiveEventOutputTimeoutsOutputReference;

new MediaLiveEventOutputTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaLiveEventOutput.MediaLiveEventOutputTimeouts">MediaLiveEventOutputTimeouts</a>

---



