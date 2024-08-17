# `mediaStreamingEndpoint` Submodule <a name="`mediaStreamingEndpoint` Submodule" id="@cdktf/provider-azurerm.mediaStreamingEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingEndpoint <a name="MediaStreamingEndpoint" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint azurerm_media_streaming_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpoint;

MediaStreamingEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .mediaServicesAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scaleUnits(java.lang.Number)
//  .accessControl(MediaStreamingEndpointAccessControl)
//  .autoStartEnabled(java.lang.Boolean)
//  .autoStartEnabled(IResolvable)
//  .cdnEnabled(java.lang.Boolean)
//  .cdnEnabled(IResolvable)
//  .cdnProfile(java.lang.String)
//  .cdnProvider(java.lang.String)
//  .crossSiteAccessPolicy(MediaStreamingEndpointCrossSiteAccessPolicy)
//  .customHostNames(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .maxCacheAgeSeconds(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MediaStreamingEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scaleUnits">scaleUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.accessControl">accessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.autoStartEnabled">autoStartEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnEnabled">cdnEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProfile">cdnProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProvider">cdnProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.crossSiteAccessPolicy">crossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.customHostNames">customHostNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.maxCacheAgeSeconds">maxCacheAgeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}.

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.mediaServicesAccountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}.

---

##### `scaleUnits`<sup>Required</sup> <a name="scaleUnits" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.scaleUnits"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}.

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.accessControl"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#access_control MediaStreamingEndpoint#access_control}

---

##### `autoStartEnabled`<sup>Optional</sup> <a name="autoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.autoStartEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}.

---

##### `cdnEnabled`<sup>Optional</sup> <a name="cdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}.

---

##### `cdnProfile`<sup>Optional</sup> <a name="cdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProfile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}.

---

##### `cdnProvider`<sup>Optional</sup> <a name="cdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.cdnProvider"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}.

---

##### `crossSiteAccessPolicy`<sup>Optional</sup> <a name="crossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.crossSiteAccessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}

---

##### `customHostNames`<sup>Optional</sup> <a name="customHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.customHostNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCacheAgeSeconds`<sup>Optional</sup> <a name="maxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.maxCacheAgeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#timeouts MediaStreamingEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl">putAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy">putCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl">resetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled">resetAutoStartEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled">resetCdnEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile">resetCdnProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider">resetCdnProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy">resetCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames">resetCustomHostNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds">resetMaxCacheAgeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessControl` <a name="putAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl"></a>

```java
public void putAccessControl(MediaStreamingEndpointAccessControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---

##### `putCrossSiteAccessPolicy` <a name="putCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy"></a>

```java
public void putCrossSiteAccessPolicy(MediaStreamingEndpointCrossSiteAccessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putCrossSiteAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts"></a>

```java
public void putTimeouts(MediaStreamingEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

---

##### `resetAccessControl` <a name="resetAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAccessControl"></a>

```java
public void resetAccessControl()
```

##### `resetAutoStartEnabled` <a name="resetAutoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetAutoStartEnabled"></a>

```java
public void resetAutoStartEnabled()
```

##### `resetCdnEnabled` <a name="resetCdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnEnabled"></a>

```java
public void resetCdnEnabled()
```

##### `resetCdnProfile` <a name="resetCdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProfile"></a>

```java
public void resetCdnProfile()
```

##### `resetCdnProvider` <a name="resetCdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCdnProvider"></a>

```java
public void resetCdnProvider()
```

##### `resetCrossSiteAccessPolicy` <a name="resetCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCrossSiteAccessPolicy"></a>

```java
public void resetCrossSiteAccessPolicy()
```

##### `resetCustomHostNames` <a name="resetCustomHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetCustomHostNames"></a>

```java
public void resetCustomHostNames()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetMaxCacheAgeSeconds` <a name="resetMaxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetMaxCacheAgeSeconds"></a>

```java
public void resetMaxCacheAgeSeconds()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaStreamingEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpoint;

MediaStreamingEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpoint;

MediaStreamingEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpoint;

MediaStreamingEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpoint;

MediaStreamingEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaStreamingEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MediaStreamingEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaStreamingEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaStreamingEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MediaStreamingEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl">accessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy">crossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput">accessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput">autoStartEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput">cdnEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput">cdnProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput">cdnProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput">crossSiteAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput">customHostNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput">maxCacheAgeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput">scaleUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled">autoStartEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled">cdnEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile">cdnProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider">cdnProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames">customHostNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds">maxCacheAgeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits">scaleUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessControl`<sup>Required</sup> <a name="accessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControl"></a>

```java
public MediaStreamingEndpointAccessControlOutputReference getAccessControl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference">MediaStreamingEndpointAccessControlOutputReference</a>

---

##### `crossSiteAccessPolicy`<sup>Required</sup> <a name="crossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicy"></a>

```java
public MediaStreamingEndpointCrossSiteAccessPolicyOutputReference getCrossSiteAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference">MediaStreamingEndpointCrossSiteAccessPolicyOutputReference</a>

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.sku"></a>

```java
public MediaStreamingEndpointSkuList getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList">MediaStreamingEndpointSkuList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeouts"></a>

```java
public MediaStreamingEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference">MediaStreamingEndpointTimeoutsOutputReference</a>

---

##### `accessControlInput`<sup>Optional</sup> <a name="accessControlInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.accessControlInput"></a>

```java
public MediaStreamingEndpointAccessControl getAccessControlInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---

##### `autoStartEnabledInput`<sup>Optional</sup> <a name="autoStartEnabledInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabledInput"></a>

```java
public java.lang.Object getAutoStartEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cdnEnabledInput`<sup>Optional</sup> <a name="cdnEnabledInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabledInput"></a>

```java
public java.lang.Object getCdnEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cdnProfileInput`<sup>Optional</sup> <a name="cdnProfileInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfileInput"></a>

```java
public java.lang.String getCdnProfileInput();
```

- *Type:* java.lang.String

---

##### `cdnProviderInput`<sup>Optional</sup> <a name="cdnProviderInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProviderInput"></a>

```java
public java.lang.String getCdnProviderInput();
```

- *Type:* java.lang.String

---

##### `crossSiteAccessPolicyInput`<sup>Optional</sup> <a name="crossSiteAccessPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.crossSiteAccessPolicyInput"></a>

```java
public MediaStreamingEndpointCrossSiteAccessPolicy getCrossSiteAccessPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---

##### `customHostNamesInput`<sup>Optional</sup> <a name="customHostNamesInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNamesInput"></a>

```java
public java.util.List<java.lang.String> getCustomHostNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxCacheAgeSecondsInput`<sup>Optional</sup> <a name="maxCacheAgeSecondsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSecondsInput"></a>

```java
public java.lang.Number getMaxCacheAgeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountNameInput"></a>

```java
public java.lang.String getMediaServicesAccountNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scaleUnitsInput`<sup>Optional</sup> <a name="scaleUnitsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnitsInput"></a>

```java
public java.lang.Number getScaleUnitsInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

---

##### `autoStartEnabled`<sup>Required</sup> <a name="autoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.autoStartEnabled"></a>

```java
public java.lang.Object getAutoStartEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cdnEnabled`<sup>Required</sup> <a name="cdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnEnabled"></a>

```java
public java.lang.Object getCdnEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cdnProfile`<sup>Required</sup> <a name="cdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProfile"></a>

```java
public java.lang.String getCdnProfile();
```

- *Type:* java.lang.String

---

##### `cdnProvider`<sup>Required</sup> <a name="cdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.cdnProvider"></a>

```java
public java.lang.String getCdnProvider();
```

- *Type:* java.lang.String

---

##### `customHostNames`<sup>Required</sup> <a name="customHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.customHostNames"></a>

```java
public java.util.List<java.lang.String> getCustomHostNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxCacheAgeSeconds`<sup>Required</sup> <a name="maxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.maxCacheAgeSeconds"></a>

```java
public java.lang.Number getMaxCacheAgeSeconds();
```

- *Type:* java.lang.Number

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.mediaServicesAccountName"></a>

```java
public java.lang.String getMediaServicesAccountName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `scaleUnits`<sup>Required</sup> <a name="scaleUnits" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.scaleUnits"></a>

```java
public java.lang.Number getScaleUnits();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingEndpointAccessControl <a name="MediaStreamingEndpointAccessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControl;

MediaStreamingEndpointAccessControl.builder()
//  .akamaiSignatureHeaderAuthenticationKey(IResolvable)
//  .akamaiSignatureHeaderAuthenticationKey(java.util.List<MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey>)
//  .ipAllow(IResolvable)
//  .ipAllow(java.util.List<MediaStreamingEndpointAccessControlIpAllow>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey">akamaiSignatureHeaderAuthenticationKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>></code> | akamai_signature_header_authentication_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow">ipAllow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>></code> | ip_allow block. |

---

##### `akamaiSignatureHeaderAuthenticationKey`<sup>Optional</sup> <a name="akamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.akamaiSignatureHeaderAuthenticationKey"></a>

```java
public java.lang.Object getAkamaiSignatureHeaderAuthenticationKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>>

akamai_signature_header_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#akamai_signature_header_authentication_key MediaStreamingEndpoint#akamai_signature_header_authentication_key}

---

##### `ipAllow`<sup>Optional</sup> <a name="ipAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl.property.ipAllow"></a>

```java
public java.lang.Object getIpAllow();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>>

ip_allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#ip_allow MediaStreamingEndpoint#ip_allow}

---

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey;

MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.builder()
//  .base64Key(java.lang.String)
//  .expiration(java.lang.String)
//  .identifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key">base64Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration">expiration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}. |

---

##### `base64Key`<sup>Optional</sup> <a name="base64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.base64Key"></a>

```java
public java.lang.String getBase64Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#base64_key MediaStreamingEndpoint#base64_key}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#expiration MediaStreamingEndpoint#expiration}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#identifier MediaStreamingEndpoint#identifier}.

---

### MediaStreamingEndpointAccessControlIpAllow <a name="MediaStreamingEndpointAccessControlIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControlIpAllow;

MediaStreamingEndpointAccessControlIpAllow.builder()
//  .address(java.lang.String)
//  .name(java.lang.String)
//  .subnetPrefixLength(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength">subnetPrefixLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#address MediaStreamingEndpoint#address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `subnetPrefixLength`<sup>Optional</sup> <a name="subnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow.property.subnetPrefixLength"></a>

```java
public java.lang.Number getSubnetPrefixLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#subnet_prefix_length MediaStreamingEndpoint#subnet_prefix_length}.

---

### MediaStreamingEndpointConfig <a name="MediaStreamingEndpointConfig" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointConfig;

MediaStreamingEndpointConfig.builder()
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
    .mediaServicesAccountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scaleUnits(java.lang.Number)
//  .accessControl(MediaStreamingEndpointAccessControl)
//  .autoStartEnabled(java.lang.Boolean)
//  .autoStartEnabled(IResolvable)
//  .cdnEnabled(java.lang.Boolean)
//  .cdnEnabled(IResolvable)
//  .cdnProfile(java.lang.String)
//  .cdnProvider(java.lang.String)
//  .crossSiteAccessPolicy(MediaStreamingEndpointCrossSiteAccessPolicy)
//  .customHostNames(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .maxCacheAgeSeconds(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MediaStreamingEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits">scaleUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl">accessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled">autoStartEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled">cdnEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile">cdnProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider">cdnProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy">crossSiteAccessPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | cross_site_access_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames">customHostNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds">maxCacheAgeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#location MediaStreamingEndpoint#location}.

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.mediaServicesAccountName"></a>

```java
public java.lang.String getMediaServicesAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#media_services_account_name MediaStreamingEndpoint#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#name MediaStreamingEndpoint#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#resource_group_name MediaStreamingEndpoint#resource_group_name}.

---

##### `scaleUnits`<sup>Required</sup> <a name="scaleUnits" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.scaleUnits"></a>

```java
public java.lang.Number getScaleUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#scale_units MediaStreamingEndpoint#scale_units}.

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.accessControl"></a>

```java
public MediaStreamingEndpointAccessControl getAccessControl();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#access_control MediaStreamingEndpoint#access_control}

---

##### `autoStartEnabled`<sup>Optional</sup> <a name="autoStartEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.autoStartEnabled"></a>

```java
public java.lang.Object getAutoStartEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#auto_start_enabled MediaStreamingEndpoint#auto_start_enabled}.

---

##### `cdnEnabled`<sup>Optional</sup> <a name="cdnEnabled" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnEnabled"></a>

```java
public java.lang.Object getCdnEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_enabled MediaStreamingEndpoint#cdn_enabled}.

---

##### `cdnProfile`<sup>Optional</sup> <a name="cdnProfile" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProfile"></a>

```java
public java.lang.String getCdnProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_profile MediaStreamingEndpoint#cdn_profile}.

---

##### `cdnProvider`<sup>Optional</sup> <a name="cdnProvider" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.cdnProvider"></a>

```java
public java.lang.String getCdnProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cdn_provider MediaStreamingEndpoint#cdn_provider}.

---

##### `crossSiteAccessPolicy`<sup>Optional</sup> <a name="crossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.crossSiteAccessPolicy"></a>

```java
public MediaStreamingEndpointCrossSiteAccessPolicy getCrossSiteAccessPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

cross_site_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cross_site_access_policy MediaStreamingEndpoint#cross_site_access_policy}

---

##### `customHostNames`<sup>Optional</sup> <a name="customHostNames" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.customHostNames"></a>

```java
public java.util.List<java.lang.String> getCustomHostNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#custom_host_names MediaStreamingEndpoint#custom_host_names}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#description MediaStreamingEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#id MediaStreamingEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCacheAgeSeconds`<sup>Optional</sup> <a name="maxCacheAgeSeconds" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.maxCacheAgeSeconds"></a>

```java
public java.lang.Number getMaxCacheAgeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#max_cache_age_seconds MediaStreamingEndpoint#max_cache_age_seconds}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#tags MediaStreamingEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointConfig.property.timeouts"></a>

```java
public MediaStreamingEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#timeouts MediaStreamingEndpoint#timeouts}

---

### MediaStreamingEndpointCrossSiteAccessPolicy <a name="MediaStreamingEndpointCrossSiteAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointCrossSiteAccessPolicy;

MediaStreamingEndpointCrossSiteAccessPolicy.builder()
//  .clientAccessPolicy(java.lang.String)
//  .crossDomainPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy">clientAccessPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy">crossDomainPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}. |

---

##### `clientAccessPolicy`<sup>Optional</sup> <a name="clientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.clientAccessPolicy"></a>

```java
public java.lang.String getClientAccessPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#client_access_policy MediaStreamingEndpoint#client_access_policy}.

---

##### `crossDomainPolicy`<sup>Optional</sup> <a name="crossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy.property.crossDomainPolicy"></a>

```java
public java.lang.String getCrossDomainPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#cross_domain_policy MediaStreamingEndpoint#cross_domain_policy}.

---

### MediaStreamingEndpointSku <a name="MediaStreamingEndpointSku" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointSku;

MediaStreamingEndpointSku.builder()
    .build();
```


### MediaStreamingEndpointTimeouts <a name="MediaStreamingEndpointTimeouts" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointTimeouts;

MediaStreamingEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#create MediaStreamingEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#delete MediaStreamingEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#read MediaStreamingEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/media_streaming_endpoint#update MediaStreamingEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList;

new MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get"></a>

```java
public MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>>

---


### MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference <a name="MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference;

new MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key">resetBase64Key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase64Key` <a name="resetBase64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetBase64Key"></a>

```java
public void resetBase64Key()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.resetIdentifier"></a>

```java
public void resetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput">base64KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput">expirationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key">base64Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `base64KeyInput`<sup>Optional</sup> <a name="base64KeyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64KeyInput"></a>

```java
public java.lang.String getBase64KeyInput();
```

- *Type:* java.lang.String

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expirationInput"></a>

```java
public java.lang.String getExpirationInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `base64Key`<sup>Required</sup> <a name="base64Key" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.base64Key"></a>

```java
public java.lang.String getBase64Key();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>

---


### MediaStreamingEndpointAccessControlIpAllowList <a name="MediaStreamingEndpointAccessControlIpAllowList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControlIpAllowList;

new MediaStreamingEndpointAccessControlIpAllowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get"></a>

```java
public MediaStreamingEndpointAccessControlIpAllowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>>

---


### MediaStreamingEndpointAccessControlIpAllowOutputReference <a name="MediaStreamingEndpointAccessControlIpAllowOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference;

new MediaStreamingEndpointAccessControlIpAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength">resetSubnetPrefixLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSubnetPrefixLength` <a name="resetSubnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.resetSubnetPrefixLength"></a>

```java
public void resetSubnetPrefixLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput">subnetPrefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength">subnetPrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `subnetPrefixLengthInput`<sup>Optional</sup> <a name="subnetPrefixLengthInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLengthInput"></a>

```java
public java.lang.Number getSubnetPrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subnetPrefixLength`<sup>Required</sup> <a name="subnetPrefixLength" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.subnetPrefixLength"></a>

```java
public java.lang.Number getSubnetPrefixLength();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>

---


### MediaStreamingEndpointAccessControlOutputReference <a name="MediaStreamingEndpointAccessControlOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointAccessControlOutputReference;

new MediaStreamingEndpointAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey">putAkamaiSignatureHeaderAuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow">putIpAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey">resetAkamaiSignatureHeaderAuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow">resetIpAllow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAkamaiSignatureHeaderAuthenticationKey` <a name="putAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey"></a>

```java
public void putAkamaiSignatureHeaderAuthenticationKey(IResolvable OR java.util.List<MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putAkamaiSignatureHeaderAuthenticationKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>>

---

##### `putIpAllow` <a name="putIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow"></a>

```java
public void putIpAllow(IResolvable OR java.util.List<MediaStreamingEndpointAccessControlIpAllow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.putIpAllow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>>

---

##### `resetAkamaiSignatureHeaderAuthenticationKey` <a name="resetAkamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetAkamaiSignatureHeaderAuthenticationKey"></a>

```java
public void resetAkamaiSignatureHeaderAuthenticationKey()
```

##### `resetIpAllow` <a name="resetIpAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.resetIpAllow"></a>

```java
public void resetIpAllow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey">akamaiSignatureHeaderAuthenticationKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow">ipAllow</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput">akamaiSignatureHeaderAuthenticationKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput">ipAllowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `akamaiSignatureHeaderAuthenticationKey`<sup>Required</sup> <a name="akamaiSignatureHeaderAuthenticationKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKey"></a>

```java
public MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList getAkamaiSignatureHeaderAuthenticationKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKeyList</a>

---

##### `ipAllow`<sup>Required</sup> <a name="ipAllow" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllow"></a>

```java
public MediaStreamingEndpointAccessControlIpAllowList getIpAllow();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllowList">MediaStreamingEndpointAccessControlIpAllowList</a>

---

##### `akamaiSignatureHeaderAuthenticationKeyInput`<sup>Optional</sup> <a name="akamaiSignatureHeaderAuthenticationKeyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.akamaiSignatureHeaderAuthenticationKeyInput"></a>

```java
public java.lang.Object getAkamaiSignatureHeaderAuthenticationKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey">MediaStreamingEndpointAccessControlAkamaiSignatureHeaderAuthenticationKey</a>>

---

##### `ipAllowInput`<sup>Optional</sup> <a name="ipAllowInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.ipAllowInput"></a>

```java
public java.lang.Object getIpAllowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlIpAllow">MediaStreamingEndpointAccessControlIpAllow</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControlOutputReference.property.internalValue"></a>

```java
public MediaStreamingEndpointAccessControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointAccessControl">MediaStreamingEndpointAccessControl</a>

---


### MediaStreamingEndpointCrossSiteAccessPolicyOutputReference <a name="MediaStreamingEndpointCrossSiteAccessPolicyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference;

new MediaStreamingEndpointCrossSiteAccessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy">resetClientAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy">resetCrossDomainPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientAccessPolicy` <a name="resetClientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetClientAccessPolicy"></a>

```java
public void resetClientAccessPolicy()
```

##### `resetCrossDomainPolicy` <a name="resetCrossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.resetCrossDomainPolicy"></a>

```java
public void resetCrossDomainPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput">clientAccessPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput">crossDomainPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy">clientAccessPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy">crossDomainPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientAccessPolicyInput`<sup>Optional</sup> <a name="clientAccessPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicyInput"></a>

```java
public java.lang.String getClientAccessPolicyInput();
```

- *Type:* java.lang.String

---

##### `crossDomainPolicyInput`<sup>Optional</sup> <a name="crossDomainPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicyInput"></a>

```java
public java.lang.String getCrossDomainPolicyInput();
```

- *Type:* java.lang.String

---

##### `clientAccessPolicy`<sup>Required</sup> <a name="clientAccessPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.clientAccessPolicy"></a>

```java
public java.lang.String getClientAccessPolicy();
```

- *Type:* java.lang.String

---

##### `crossDomainPolicy`<sup>Required</sup> <a name="crossDomainPolicy" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.crossDomainPolicy"></a>

```java
public java.lang.String getCrossDomainPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicyOutputReference.property.internalValue"></a>

```java
public MediaStreamingEndpointCrossSiteAccessPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointCrossSiteAccessPolicy">MediaStreamingEndpointCrossSiteAccessPolicy</a>

---


### MediaStreamingEndpointSkuList <a name="MediaStreamingEndpointSkuList" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointSkuList;

new MediaStreamingEndpointSkuList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get"></a>

```java
public MediaStreamingEndpointSkuOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MediaStreamingEndpointSkuOutputReference <a name="MediaStreamingEndpointSkuOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointSkuOutputReference;

new MediaStreamingEndpointSkuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSkuOutputReference.property.internalValue"></a>

```java
public MediaStreamingEndpointSku getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointSku">MediaStreamingEndpointSku</a>

---


### MediaStreamingEndpointTimeoutsOutputReference <a name="MediaStreamingEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.media_streaming_endpoint.MediaStreamingEndpointTimeoutsOutputReference;

new MediaStreamingEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mediaStreamingEndpoint.MediaStreamingEndpointTimeouts">MediaStreamingEndpointTimeouts</a>

---



