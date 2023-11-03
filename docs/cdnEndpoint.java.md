# `azurerm_cdn_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_cdn_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint).

# `cdnEndpoint` Submodule <a name="`cdnEndpoint` Submodule" id="@cdktf/provider-azurerm.cdnEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnEndpoint <a name="CdnEndpoint" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint azurerm_cdn_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpoint;

CdnEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .origin(IResolvable)
    .origin(java.util.List<CdnEndpointOrigin>)
    .profileName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .contentTypesToCompress(java.util.List<java.lang.String>)
//  .deliveryRule(IResolvable)
//  .deliveryRule(java.util.List<CdnEndpointDeliveryRule>)
//  .geoFilter(IResolvable)
//  .geoFilter(java.util.List<CdnEndpointGeoFilter>)
//  .globalDeliveryRule(CdnEndpointGlobalDeliveryRule)
//  .id(java.lang.String)
//  .isCompressionEnabled(java.lang.Boolean)
//  .isCompressionEnabled(IResolvable)
//  .isHttpAllowed(java.lang.Boolean)
//  .isHttpAllowed(IResolvable)
//  .isHttpsAllowed(java.lang.Boolean)
//  .isHttpsAllowed(IResolvable)
//  .optimizationType(java.lang.String)
//  .originHostHeader(java.lang.String)
//  .originPath(java.lang.String)
//  .probePath(java.lang.String)
//  .querystringCachingBehaviour(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CdnEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.origin">origin</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>></code> | origin block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.contentTypesToCompress">contentTypesToCompress</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.deliveryRule">deliveryRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>></code> | delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.geoFilter">geoFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>></code> | geo_filter block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.globalDeliveryRule">globalDeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | global_delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.isCompressionEnabled">isCompressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.isHttpAllowed">isHttpAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.isHttpsAllowed">isHttpsAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.optimizationType">optimizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.originHostHeader">originHostHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.originPath">originPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.probePath">probePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.querystringCachingBehaviour">querystringCachingBehaviour</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.origin"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>>

origin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin CdnEndpoint#origin}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}.

---

##### `contentTypesToCompress`<sup>Optional</sup> <a name="contentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.contentTypesToCompress"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}.

---

##### `deliveryRule`<sup>Optional</sup> <a name="deliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.deliveryRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>>

delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#delivery_rule CdnEndpoint#delivery_rule}

---

##### `geoFilter`<sup>Optional</sup> <a name="geoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.geoFilter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>>

geo_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#geo_filter CdnEndpoint#geo_filter}

---

##### `globalDeliveryRule`<sup>Optional</sup> <a name="globalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.globalDeliveryRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

global_delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#global_delivery_rule CdnEndpoint#global_delivery_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompressionEnabled`<sup>Optional</sup> <a name="isCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.isCompressionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}.

---

##### `isHttpAllowed`<sup>Optional</sup> <a name="isHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.isHttpAllowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}.

---

##### `isHttpsAllowed`<sup>Optional</sup> <a name="isHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.isHttpsAllowed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}.

---

##### `optimizationType`<sup>Optional</sup> <a name="optimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.optimizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}.

---

##### `originHostHeader`<sup>Optional</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.originHostHeader"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}.

---

##### `originPath`<sup>Optional</sup> <a name="originPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.originPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}.

---

##### `probePath`<sup>Optional</sup> <a name="probePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.probePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}.

---

##### `querystringCachingBehaviour`<sup>Optional</sup> <a name="querystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.querystringCachingBehaviour"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#timeouts CdnEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule">putDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter">putGeoFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule">putGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetContentTypesToCompress">resetContentTypesToCompress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetDeliveryRule">resetDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGeoFilter">resetGeoFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGlobalDeliveryRule">resetGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsCompressionEnabled">resetIsCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpAllowed">resetIsHttpAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpsAllowed">resetIsHttpsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOptimizationType">resetOptimizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginHostHeader">resetOriginHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginPath">resetOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetProbePath">resetProbePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetQuerystringCachingBehaviour">resetQuerystringCachingBehaviour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDeliveryRule` <a name="putDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule"></a>

```java
public void putDeliveryRule(IResolvable OR java.util.List<CdnEndpointDeliveryRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putDeliveryRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>>

---

##### `putGeoFilter` <a name="putGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter"></a>

```java
public void putGeoFilter(IResolvable OR java.util.List<CdnEndpointGeoFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGeoFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>>

---

##### `putGlobalDeliveryRule` <a name="putGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule"></a>

```java
public void putGlobalDeliveryRule(CdnEndpointGlobalDeliveryRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putGlobalDeliveryRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---

##### `putOrigin` <a name="putOrigin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin"></a>

```java
public void putOrigin(IResolvable OR java.util.List<CdnEndpointOrigin> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putOrigin.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts"></a>

```java
public void putTimeouts(CdnEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

---

##### `resetContentTypesToCompress` <a name="resetContentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetContentTypesToCompress"></a>

```java
public void resetContentTypesToCompress()
```

##### `resetDeliveryRule` <a name="resetDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetDeliveryRule"></a>

```java
public void resetDeliveryRule()
```

##### `resetGeoFilter` <a name="resetGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGeoFilter"></a>

```java
public void resetGeoFilter()
```

##### `resetGlobalDeliveryRule` <a name="resetGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetGlobalDeliveryRule"></a>

```java
public void resetGlobalDeliveryRule()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetIsCompressionEnabled` <a name="resetIsCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsCompressionEnabled"></a>

```java
public void resetIsCompressionEnabled()
```

##### `resetIsHttpAllowed` <a name="resetIsHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpAllowed"></a>

```java
public void resetIsHttpAllowed()
```

##### `resetIsHttpsAllowed` <a name="resetIsHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetIsHttpsAllowed"></a>

```java
public void resetIsHttpsAllowed()
```

##### `resetOptimizationType` <a name="resetOptimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOptimizationType"></a>

```java
public void resetOptimizationType()
```

##### `resetOriginHostHeader` <a name="resetOriginHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginHostHeader"></a>

```java
public void resetOriginHostHeader()
```

##### `resetOriginPath` <a name="resetOriginPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetOriginPath"></a>

```java
public void resetOriginPath()
```

##### `resetProbePath` <a name="resetProbePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetProbePath"></a>

```java
public void resetProbePath()
```

##### `resetQuerystringCachingBehaviour` <a name="resetQuerystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetQuerystringCachingBehaviour"></a>

```java
public void resetQuerystringCachingBehaviour()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpoint;

CdnEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpoint;

CdnEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpoint;

CdnEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpoint;

CdnEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRule">deliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList">CdnEndpointDeliveryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilter">geoFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList">CdnEndpointGeoFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRule">globalDeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference">CdnEndpointGlobalDeliveryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList">CdnEndpointOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference">CdnEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompressInput">contentTypesToCompressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRuleInput">deliveryRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilterInput">geoFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRuleInput">globalDeliveryRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabledInput">isCompressionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowedInput">isHttpAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowedInput">isHttpsAllowedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationTypeInput">optimizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeaderInput">originHostHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originInput">originInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPathInput">originPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePathInput">probePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviourInput">querystringCachingBehaviourInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompress">contentTypesToCompress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabled">isCompressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowed">isHttpAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowed">isHttpsAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationType">optimizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeader">originHostHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPath">originPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePath">probePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviour">querystringCachingBehaviour</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deliveryRule`<sup>Required</sup> <a name="deliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRule"></a>

```java
public CdnEndpointDeliveryRuleList getDeliveryRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList">CdnEndpointDeliveryRuleList</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `geoFilter`<sup>Required</sup> <a name="geoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilter"></a>

```java
public CdnEndpointGeoFilterList getGeoFilter();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList">CdnEndpointGeoFilterList</a>

---

##### `globalDeliveryRule`<sup>Required</sup> <a name="globalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRule"></a>

```java
public CdnEndpointGlobalDeliveryRuleOutputReference getGlobalDeliveryRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference">CdnEndpointGlobalDeliveryRuleOutputReference</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.origin"></a>

```java
public CdnEndpointOriginList getOrigin();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList">CdnEndpointOriginList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeouts"></a>

```java
public CdnEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference">CdnEndpointTimeoutsOutputReference</a>

---

##### `contentTypesToCompressInput`<sup>Optional</sup> <a name="contentTypesToCompressInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompressInput"></a>

```java
public java.util.List<java.lang.String> getContentTypesToCompressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deliveryRuleInput`<sup>Optional</sup> <a name="deliveryRuleInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.deliveryRuleInput"></a>

```java
public java.lang.Object getDeliveryRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>>

---

##### `geoFilterInput`<sup>Optional</sup> <a name="geoFilterInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.geoFilterInput"></a>

```java
public java.lang.Object getGeoFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>>

---

##### `globalDeliveryRuleInput`<sup>Optional</sup> <a name="globalDeliveryRuleInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.globalDeliveryRuleInput"></a>

```java
public CdnEndpointGlobalDeliveryRule getGlobalDeliveryRuleInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isCompressionEnabledInput`<sup>Optional</sup> <a name="isCompressionEnabledInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabledInput"></a>

```java
public java.lang.Object getIsCompressionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHttpAllowedInput`<sup>Optional</sup> <a name="isHttpAllowedInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowedInput"></a>

```java
public java.lang.Object getIsHttpAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHttpsAllowedInput`<sup>Optional</sup> <a name="isHttpsAllowedInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowedInput"></a>

```java
public java.lang.Object getIsHttpsAllowedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optimizationTypeInput`<sup>Optional</sup> <a name="optimizationTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationTypeInput"></a>

```java
public java.lang.String getOptimizationTypeInput();
```

- *Type:* java.lang.String

---

##### `originHostHeaderInput`<sup>Optional</sup> <a name="originHostHeaderInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeaderInput"></a>

```java
public java.lang.String getOriginHostHeaderInput();
```

- *Type:* java.lang.String

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originInput"></a>

```java
public java.lang.Object getOriginInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>>

---

##### `originPathInput`<sup>Optional</sup> <a name="originPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPathInput"></a>

```java
public java.lang.String getOriginPathInput();
```

- *Type:* java.lang.String

---

##### `probePathInput`<sup>Optional</sup> <a name="probePathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePathInput"></a>

```java
public java.lang.String getProbePathInput();
```

- *Type:* java.lang.String

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `querystringCachingBehaviourInput`<sup>Optional</sup> <a name="querystringCachingBehaviourInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviourInput"></a>

```java
public java.lang.String getQuerystringCachingBehaviourInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

---

##### `contentTypesToCompress`<sup>Required</sup> <a name="contentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.contentTypesToCompress"></a>

```java
public java.util.List<java.lang.String> getContentTypesToCompress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isCompressionEnabled`<sup>Required</sup> <a name="isCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isCompressionEnabled"></a>

```java
public java.lang.Object getIsCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHttpAllowed`<sup>Required</sup> <a name="isHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpAllowed"></a>

```java
public java.lang.Object getIsHttpAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isHttpsAllowed`<sup>Required</sup> <a name="isHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.isHttpsAllowed"></a>

```java
public java.lang.Object getIsHttpsAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `optimizationType`<sup>Required</sup> <a name="optimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.optimizationType"></a>

```java
public java.lang.String getOptimizationType();
```

- *Type:* java.lang.String

---

##### `originHostHeader`<sup>Required</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originHostHeader"></a>

```java
public java.lang.String getOriginHostHeader();
```

- *Type:* java.lang.String

---

##### `originPath`<sup>Required</sup> <a name="originPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.originPath"></a>

```java
public java.lang.String getOriginPath();
```

- *Type:* java.lang.String

---

##### `probePath`<sup>Required</sup> <a name="probePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.probePath"></a>

```java
public java.lang.String getProbePath();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `querystringCachingBehaviour`<sup>Required</sup> <a name="querystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.querystringCachingBehaviour"></a>

```java
public java.lang.String getQuerystringCachingBehaviour();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnEndpointConfig <a name="CdnEndpointConfig" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointConfig;

CdnEndpointConfig.builder()
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
    .name(java.lang.String)
    .origin(IResolvable)
    .origin(java.util.List<CdnEndpointOrigin>)
    .profileName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .contentTypesToCompress(java.util.List<java.lang.String>)
//  .deliveryRule(IResolvable)
//  .deliveryRule(java.util.List<CdnEndpointDeliveryRule>)
//  .geoFilter(IResolvable)
//  .geoFilter(java.util.List<CdnEndpointGeoFilter>)
//  .globalDeliveryRule(CdnEndpointGlobalDeliveryRule)
//  .id(java.lang.String)
//  .isCompressionEnabled(java.lang.Boolean)
//  .isCompressionEnabled(IResolvable)
//  .isHttpAllowed(java.lang.Boolean)
//  .isHttpAllowed(IResolvable)
//  .isHttpsAllowed(java.lang.Boolean)
//  .isHttpsAllowed(IResolvable)
//  .optimizationType(java.lang.String)
//  .originHostHeader(java.lang.String)
//  .originPath(java.lang.String)
//  .probePath(java.lang.String)
//  .querystringCachingBehaviour(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CdnEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.origin">origin</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>></code> | origin block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.contentTypesToCompress">contentTypesToCompress</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.deliveryRule">deliveryRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>></code> | delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.geoFilter">geoFilter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>></code> | geo_filter block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.globalDeliveryRule">globalDeliveryRule</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | global_delivery_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isCompressionEnabled">isCompressionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpAllowed">isHttpAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpsAllowed">isHttpsAllowed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.optimizationType">optimizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originHostHeader">originHostHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originPath">originPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.probePath">probePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.querystringCachingBehaviour">querystringCachingBehaviour</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#location CdnEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.origin"></a>

```java
public java.lang.Object getOrigin();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>>

origin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin CdnEndpoint#origin}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#profile_name CdnEndpoint#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#resource_group_name CdnEndpoint#resource_group_name}.

---

##### `contentTypesToCompress`<sup>Optional</sup> <a name="contentTypesToCompress" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.contentTypesToCompress"></a>

```java
public java.util.List<java.lang.String> getContentTypesToCompress();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#content_types_to_compress CdnEndpoint#content_types_to_compress}.

---

##### `deliveryRule`<sup>Optional</sup> <a name="deliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.deliveryRule"></a>

```java
public java.lang.Object getDeliveryRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>>

delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#delivery_rule CdnEndpoint#delivery_rule}

---

##### `geoFilter`<sup>Optional</sup> <a name="geoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.geoFilter"></a>

```java
public java.lang.Object getGeoFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>>

geo_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#geo_filter CdnEndpoint#geo_filter}

---

##### `globalDeliveryRule`<sup>Optional</sup> <a name="globalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.globalDeliveryRule"></a>

```java
public CdnEndpointGlobalDeliveryRule getGlobalDeliveryRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

global_delivery_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#global_delivery_rule CdnEndpoint#global_delivery_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#id CdnEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompressionEnabled`<sup>Optional</sup> <a name="isCompressionEnabled" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isCompressionEnabled"></a>

```java
public java.lang.Object getIsCompressionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_compression_enabled CdnEndpoint#is_compression_enabled}.

---

##### `isHttpAllowed`<sup>Optional</sup> <a name="isHttpAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpAllowed"></a>

```java
public java.lang.Object getIsHttpAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_http_allowed CdnEndpoint#is_http_allowed}.

---

##### `isHttpsAllowed`<sup>Optional</sup> <a name="isHttpsAllowed" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.isHttpsAllowed"></a>

```java
public java.lang.Object getIsHttpsAllowed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#is_https_allowed CdnEndpoint#is_https_allowed}.

---

##### `optimizationType`<sup>Optional</sup> <a name="optimizationType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.optimizationType"></a>

```java
public java.lang.String getOptimizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#optimization_type CdnEndpoint#optimization_type}.

---

##### `originHostHeader`<sup>Optional</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originHostHeader"></a>

```java
public java.lang.String getOriginHostHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_host_header CdnEndpoint#origin_host_header}.

---

##### `originPath`<sup>Optional</sup> <a name="originPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.originPath"></a>

```java
public java.lang.String getOriginPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#origin_path CdnEndpoint#origin_path}.

---

##### `probePath`<sup>Optional</sup> <a name="probePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.probePath"></a>

```java
public java.lang.String getProbePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#probe_path CdnEndpoint#probe_path}.

---

##### `querystringCachingBehaviour`<sup>Optional</sup> <a name="querystringCachingBehaviour" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.querystringCachingBehaviour"></a>

```java
public java.lang.String getQuerystringCachingBehaviour();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#querystring_caching_behaviour CdnEndpoint#querystring_caching_behaviour}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#tags CdnEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointConfig.property.timeouts"></a>

```java
public CdnEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#timeouts CdnEndpoint#timeouts}

---

### CdnEndpointDeliveryRule <a name="CdnEndpointDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRule;

CdnEndpointDeliveryRule.builder()
    .name(java.lang.String)
    .order(java.lang.Number)
//  .cacheExpirationAction(CdnEndpointDeliveryRuleCacheExpirationAction)
//  .cacheKeyQueryStringAction(CdnEndpointDeliveryRuleCacheKeyQueryStringAction)
//  .cookiesCondition(IResolvable)
//  .cookiesCondition(java.util.List<CdnEndpointDeliveryRuleCookiesCondition>)
//  .deviceCondition(CdnEndpointDeliveryRuleDeviceCondition)
//  .httpVersionCondition(IResolvable)
//  .httpVersionCondition(java.util.List<CdnEndpointDeliveryRuleHttpVersionCondition>)
//  .modifyRequestHeaderAction(IResolvable)
//  .modifyRequestHeaderAction(java.util.List<CdnEndpointDeliveryRuleModifyRequestHeaderAction>)
//  .modifyResponseHeaderAction(IResolvable)
//  .modifyResponseHeaderAction(java.util.List<CdnEndpointDeliveryRuleModifyResponseHeaderAction>)
//  .postArgCondition(IResolvable)
//  .postArgCondition(java.util.List<CdnEndpointDeliveryRulePostArgCondition>)
//  .queryStringCondition(IResolvable)
//  .queryStringCondition(java.util.List<CdnEndpointDeliveryRuleQueryStringCondition>)
//  .remoteAddressCondition(IResolvable)
//  .remoteAddressCondition(java.util.List<CdnEndpointDeliveryRuleRemoteAddressCondition>)
//  .requestBodyCondition(IResolvable)
//  .requestBodyCondition(java.util.List<CdnEndpointDeliveryRuleRequestBodyCondition>)
//  .requestHeaderCondition(IResolvable)
//  .requestHeaderCondition(java.util.List<CdnEndpointDeliveryRuleRequestHeaderCondition>)
//  .requestMethodCondition(CdnEndpointDeliveryRuleRequestMethodCondition)
//  .requestSchemeCondition(CdnEndpointDeliveryRuleRequestSchemeCondition)
//  .requestUriCondition(IResolvable)
//  .requestUriCondition(java.util.List<CdnEndpointDeliveryRuleRequestUriCondition>)
//  .urlFileExtensionCondition(IResolvable)
//  .urlFileExtensionCondition(java.util.List<CdnEndpointDeliveryRuleUrlFileExtensionCondition>)
//  .urlFileNameCondition(IResolvable)
//  .urlFileNameCondition(java.util.List<CdnEndpointDeliveryRuleUrlFileNameCondition>)
//  .urlPathCondition(IResolvable)
//  .urlPathCondition(java.util.List<CdnEndpointDeliveryRuleUrlPathCondition>)
//  .urlRedirectAction(CdnEndpointDeliveryRuleUrlRedirectAction)
//  .urlRewriteAction(CdnEndpointDeliveryRuleUrlRewriteAction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#order CdnEndpoint#order}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | cache_expiration_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | cache_key_query_string_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cookiesCondition">cookiesCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>></code> | cookies_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.deviceCondition">deviceCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | device_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.httpVersionCondition">httpVersionCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>></code> | http_version_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>></code> | modify_request_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>></code> | modify_response_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.postArgCondition">postArgCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>></code> | post_arg_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.queryStringCondition">queryStringCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>></code> | query_string_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.remoteAddressCondition">remoteAddressCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>></code> | remote_address_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestBodyCondition">requestBodyCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>></code> | request_body_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestHeaderCondition">requestHeaderCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>></code> | request_header_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestMethodCondition">requestMethodCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | request_method_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestSchemeCondition">requestSchemeCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | request_scheme_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestUriCondition">requestUriCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>></code> | request_uri_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileExtensionCondition">urlFileExtensionCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>></code> | url_file_extension_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileNameCondition">urlFileNameCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>></code> | url_file_name_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlPathCondition">urlPathCondition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>></code> | url_path_condition block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | url_redirect_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | url_rewrite_action block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#order CdnEndpoint#order}.

---

##### `cacheExpirationAction`<sup>Optional</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheExpirationAction"></a>

```java
public CdnEndpointDeliveryRuleCacheExpirationAction getCacheExpirationAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

cache_expiration_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}

---

##### `cacheKeyQueryStringAction`<sup>Optional</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cacheKeyQueryStringAction"></a>

```java
public CdnEndpointDeliveryRuleCacheKeyQueryStringAction getCacheKeyQueryStringAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

cache_key_query_string_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}

---

##### `cookiesCondition`<sup>Optional</sup> <a name="cookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.cookiesCondition"></a>

```java
public java.lang.Object getCookiesCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>>

cookies_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#cookies_condition CdnEndpoint#cookies_condition}

---

##### `deviceCondition`<sup>Optional</sup> <a name="deviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.deviceCondition"></a>

```java
public CdnEndpointDeliveryRuleDeviceCondition getDeviceCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

device_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#device_condition CdnEndpoint#device_condition}

---

##### `httpVersionCondition`<sup>Optional</sup> <a name="httpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.httpVersionCondition"></a>

```java
public java.lang.Object getHttpVersionCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>>

http_version_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#http_version_condition CdnEndpoint#http_version_condition}

---

##### `modifyRequestHeaderAction`<sup>Optional</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyRequestHeaderAction"></a>

```java
public java.lang.Object getModifyRequestHeaderAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>>

modify_request_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}

---

##### `modifyResponseHeaderAction`<sup>Optional</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.modifyResponseHeaderAction"></a>

```java
public java.lang.Object getModifyResponseHeaderAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>>

modify_response_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}

---

##### `postArgCondition`<sup>Optional</sup> <a name="postArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.postArgCondition"></a>

```java
public java.lang.Object getPostArgCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>>

post_arg_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#post_arg_condition CdnEndpoint#post_arg_condition}

---

##### `queryStringCondition`<sup>Optional</sup> <a name="queryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.queryStringCondition"></a>

```java
public java.lang.Object getQueryStringCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>>

query_string_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#query_string_condition CdnEndpoint#query_string_condition}

---

##### `remoteAddressCondition`<sup>Optional</sup> <a name="remoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.remoteAddressCondition"></a>

```java
public java.lang.Object getRemoteAddressCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>>

remote_address_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#remote_address_condition CdnEndpoint#remote_address_condition}

---

##### `requestBodyCondition`<sup>Optional</sup> <a name="requestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestBodyCondition"></a>

```java
public java.lang.Object getRequestBodyCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>>

request_body_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#request_body_condition CdnEndpoint#request_body_condition}

---

##### `requestHeaderCondition`<sup>Optional</sup> <a name="requestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestHeaderCondition"></a>

```java
public java.lang.Object getRequestHeaderCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>>

request_header_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#request_header_condition CdnEndpoint#request_header_condition}

---

##### `requestMethodCondition`<sup>Optional</sup> <a name="requestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestMethodCondition"></a>

```java
public CdnEndpointDeliveryRuleRequestMethodCondition getRequestMethodCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

request_method_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#request_method_condition CdnEndpoint#request_method_condition}

---

##### `requestSchemeCondition`<sup>Optional</sup> <a name="requestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestSchemeCondition"></a>

```java
public CdnEndpointDeliveryRuleRequestSchemeCondition getRequestSchemeCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

request_scheme_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#request_scheme_condition CdnEndpoint#request_scheme_condition}

---

##### `requestUriCondition`<sup>Optional</sup> <a name="requestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.requestUriCondition"></a>

```java
public java.lang.Object getRequestUriCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>>

request_uri_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#request_uri_condition CdnEndpoint#request_uri_condition}

---

##### `urlFileExtensionCondition`<sup>Optional</sup> <a name="urlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileExtensionCondition"></a>

```java
public java.lang.Object getUrlFileExtensionCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>>

url_file_extension_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#url_file_extension_condition CdnEndpoint#url_file_extension_condition}

---

##### `urlFileNameCondition`<sup>Optional</sup> <a name="urlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlFileNameCondition"></a>

```java
public java.lang.Object getUrlFileNameCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>>

url_file_name_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#url_file_name_condition CdnEndpoint#url_file_name_condition}

---

##### `urlPathCondition`<sup>Optional</sup> <a name="urlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlPathCondition"></a>

```java
public java.lang.Object getUrlPathCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>>

url_path_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#url_path_condition CdnEndpoint#url_path_condition}

---

##### `urlRedirectAction`<sup>Optional</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRedirectAction"></a>

```java
public CdnEndpointDeliveryRuleUrlRedirectAction getUrlRedirectAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

url_redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}

---

##### `urlRewriteAction`<sup>Optional</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule.property.urlRewriteAction"></a>

```java
public CdnEndpointDeliveryRuleUrlRewriteAction getUrlRewriteAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

url_rewrite_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}

---

### CdnEndpointDeliveryRuleCacheExpirationAction <a name="CdnEndpointDeliveryRuleCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleCacheExpirationAction;

CdnEndpointDeliveryRuleCacheExpirationAction.builder()
    .behavior(java.lang.String)
//  .duration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}.

---

### CdnEndpointDeliveryRuleCacheKeyQueryStringAction <a name="CdnEndpointDeliveryRuleCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction;

CdnEndpointDeliveryRuleCacheKeyQueryStringAction.builder()
    .behavior(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}.

---

### CdnEndpointDeliveryRuleCookiesCondition <a name="CdnEndpointDeliveryRuleCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleCookiesCondition;

CdnEndpointDeliveryRuleCookiesCondition.builder()
    .operator(java.lang.String)
    .selector(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.selector">selector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleDeviceCondition <a name="CdnEndpointDeliveryRuleDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleDeviceCondition;

CdnEndpointDeliveryRuleDeviceCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleHttpVersionCondition <a name="CdnEndpointDeliveryRuleHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleHttpVersionCondition;

CdnEndpointDeliveryRuleHttpVersionCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleModifyRequestHeaderAction <a name="CdnEndpointDeliveryRuleModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction;

CdnEndpointDeliveryRuleModifyRequestHeaderAction.builder()
    .action(java.lang.String)
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointDeliveryRuleModifyResponseHeaderAction <a name="CdnEndpointDeliveryRuleModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction;

CdnEndpointDeliveryRuleModifyResponseHeaderAction.builder()
    .action(java.lang.String)
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointDeliveryRulePostArgCondition <a name="CdnEndpointDeliveryRulePostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRulePostArgCondition;

CdnEndpointDeliveryRulePostArgCondition.builder()
    .operator(java.lang.String)
    .selector(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.selector">selector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleQueryStringCondition <a name="CdnEndpointDeliveryRuleQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleQueryStringCondition;

CdnEndpointDeliveryRuleQueryStringCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRemoteAddressCondition <a name="CdnEndpointDeliveryRuleRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRemoteAddressCondition;

CdnEndpointDeliveryRuleRemoteAddressCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

### CdnEndpointDeliveryRuleRequestBodyCondition <a name="CdnEndpointDeliveryRuleRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestBodyCondition;

CdnEndpointDeliveryRuleRequestBodyCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRequestHeaderCondition <a name="CdnEndpointDeliveryRuleRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestHeaderCondition;

CdnEndpointDeliveryRuleRequestHeaderCondition.builder()
    .operator(java.lang.String)
    .selector(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.selector">selector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#selector CdnEndpoint#selector}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleRequestMethodCondition <a name="CdnEndpointDeliveryRuleRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestMethodCondition;

CdnEndpointDeliveryRuleRequestMethodCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleRequestSchemeCondition <a name="CdnEndpointDeliveryRuleRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestSchemeCondition;

CdnEndpointDeliveryRuleRequestSchemeCondition.builder()
    .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

### CdnEndpointDeliveryRuleRequestUriCondition <a name="CdnEndpointDeliveryRuleRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestUriCondition;

CdnEndpointDeliveryRuleRequestUriCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlFileExtensionCondition <a name="CdnEndpointDeliveryRuleUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition;

CdnEndpointDeliveryRuleUrlFileExtensionCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlFileNameCondition <a name="CdnEndpointDeliveryRuleUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlFileNameCondition;

CdnEndpointDeliveryRuleUrlFileNameCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlPathCondition <a name="CdnEndpointDeliveryRuleUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlPathCondition;

CdnEndpointDeliveryRuleUrlPathCondition.builder()
    .operator(java.lang.String)
//  .matchValues(java.util.List<java.lang.String>)
//  .negateCondition(java.lang.Boolean)
//  .negateCondition(IResolvable)
//  .transforms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#operator CdnEndpoint#operator}.

---

##### `matchValues`<sup>Optional</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#match_values CdnEndpoint#match_values}.

---

##### `negateCondition`<sup>Optional</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#negate_condition CdnEndpoint#negate_condition}.

---

##### `transforms`<sup>Optional</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#transforms CdnEndpoint#transforms}.

---

### CdnEndpointDeliveryRuleUrlRedirectAction <a name="CdnEndpointDeliveryRuleUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlRedirectAction;

CdnEndpointDeliveryRuleUrlRedirectAction.builder()
    .redirectType(java.lang.String)
//  .fragment(java.lang.String)
//  .hostname(java.lang.String)
//  .path(java.lang.String)
//  .protocol(java.lang.String)
//  .queryString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.fragment">fragment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.queryString">queryString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}. |

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}.

---

##### `fragment`<sup>Optional</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.fragment"></a>

```java
public java.lang.String getFragment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}.

---

### CdnEndpointDeliveryRuleUrlRewriteAction <a name="CdnEndpointDeliveryRuleUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlRewriteAction;

CdnEndpointDeliveryRuleUrlRewriteAction.builder()
    .destination(java.lang.String)
    .sourcePattern(java.lang.String)
//  .preserveUnmatchedPath(java.lang.Boolean)
//  .preserveUnmatchedPath(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.sourcePattern">sourcePattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}.

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.sourcePattern"></a>

```java
public java.lang.String getSourcePattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}.

---

##### `preserveUnmatchedPath`<sup>Optional</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath"></a>

```java
public java.lang.Object getPreserveUnmatchedPath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}.

---

### CdnEndpointGeoFilter <a name="CdnEndpointGeoFilter" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGeoFilter;

CdnEndpointGeoFilter.builder()
    .action(java.lang.String)
    .countryCodes(java.util.List<java.lang.String>)
    .relativePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.countryCodes">countryCodes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#country_codes CdnEndpoint#country_codes}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.relativePath">relativePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#relative_path CdnEndpoint#relative_path}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `countryCodes`<sup>Required</sup> <a name="countryCodes" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.countryCodes"></a>

```java
public java.util.List<java.lang.String> getCountryCodes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#country_codes CdnEndpoint#country_codes}.

---

##### `relativePath`<sup>Required</sup> <a name="relativePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter.property.relativePath"></a>

```java
public java.lang.String getRelativePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#relative_path CdnEndpoint#relative_path}.

---

### CdnEndpointGlobalDeliveryRule <a name="CdnEndpointGlobalDeliveryRule" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRule;

CdnEndpointGlobalDeliveryRule.builder()
//  .cacheExpirationAction(CdnEndpointGlobalDeliveryRuleCacheExpirationAction)
//  .cacheKeyQueryStringAction(CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction)
//  .modifyRequestHeaderAction(IResolvable)
//  .modifyRequestHeaderAction(java.util.List<CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction>)
//  .modifyResponseHeaderAction(IResolvable)
//  .modifyResponseHeaderAction(java.util.List<CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction>)
//  .urlRedirectAction(CdnEndpointGlobalDeliveryRuleUrlRedirectAction)
//  .urlRewriteAction(CdnEndpointGlobalDeliveryRuleUrlRewriteAction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | cache_expiration_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | cache_key_query_string_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>></code> | modify_request_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>></code> | modify_response_header_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | url_redirect_action block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | url_rewrite_action block. |

---

##### `cacheExpirationAction`<sup>Optional</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheExpirationAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheExpirationAction getCacheExpirationAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

cache_expiration_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#cache_expiration_action CdnEndpoint#cache_expiration_action}

---

##### `cacheKeyQueryStringAction`<sup>Optional</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.cacheKeyQueryStringAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction getCacheKeyQueryStringAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

cache_key_query_string_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#cache_key_query_string_action CdnEndpoint#cache_key_query_string_action}

---

##### `modifyRequestHeaderAction`<sup>Optional</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyRequestHeaderAction"></a>

```java
public java.lang.Object getModifyRequestHeaderAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>>

modify_request_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#modify_request_header_action CdnEndpoint#modify_request_header_action}

---

##### `modifyResponseHeaderAction`<sup>Optional</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.modifyResponseHeaderAction"></a>

```java
public java.lang.Object getModifyResponseHeaderAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>>

modify_response_header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#modify_response_header_action CdnEndpoint#modify_response_header_action}

---

##### `urlRedirectAction`<sup>Optional</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRedirectAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRedirectAction getUrlRedirectAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

url_redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#url_redirect_action CdnEndpoint#url_redirect_action}

---

##### `urlRewriteAction`<sup>Optional</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule.property.urlRewriteAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRewriteAction getUrlRewriteAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

url_rewrite_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#url_rewrite_action CdnEndpoint#url_rewrite_action}

---

### CdnEndpointGlobalDeliveryRuleCacheExpirationAction <a name="CdnEndpointGlobalDeliveryRuleCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction;

CdnEndpointGlobalDeliveryRuleCacheExpirationAction.builder()
    .behavior(java.lang.String)
//  .duration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#duration CdnEndpoint#duration}.

---

### CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction <a name="CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction;

CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.builder()
    .behavior(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}. |

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#behavior CdnEndpoint#behavior}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#parameters CdnEndpoint#parameters}.

---

### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction;

CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.builder()
    .action(java.lang.String)
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction;

CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.builder()
    .action(java.lang.String)
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#action CdnEndpoint#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#value CdnEndpoint#value}.

---

### CdnEndpointGlobalDeliveryRuleUrlRedirectAction <a name="CdnEndpointGlobalDeliveryRuleUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction;

CdnEndpointGlobalDeliveryRuleUrlRedirectAction.builder()
    .redirectType(java.lang.String)
//  .fragment(java.lang.String)
//  .hostname(java.lang.String)
//  .path(java.lang.String)
//  .protocol(java.lang.String)
//  .queryString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.fragment">fragment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.queryString">queryString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}. |

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#redirect_type CdnEndpoint#redirect_type}.

---

##### `fragment`<sup>Optional</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.fragment"></a>

```java
public java.lang.String getFragment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#fragment CdnEndpoint#fragment}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#hostname CdnEndpoint#hostname}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#path CdnEndpoint#path}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#protocol CdnEndpoint#protocol}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#query_string CdnEndpoint#query_string}.

---

### CdnEndpointGlobalDeliveryRuleUrlRewriteAction <a name="CdnEndpointGlobalDeliveryRuleUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction;

CdnEndpointGlobalDeliveryRuleUrlRewriteAction.builder()
    .destination(java.lang.String)
    .sourcePattern(java.lang.String)
//  .preserveUnmatchedPath(java.lang.Boolean)
//  .preserveUnmatchedPath(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.sourcePattern">sourcePattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#destination CdnEndpoint#destination}.

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.sourcePattern"></a>

```java
public java.lang.String getSourcePattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#source_pattern CdnEndpoint#source_pattern}.

---

##### `preserveUnmatchedPath`<sup>Optional</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction.property.preserveUnmatchedPath"></a>

```java
public java.lang.Object getPreserveUnmatchedPath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#preserve_unmatched_path CdnEndpoint#preserve_unmatched_path}.

---

### CdnEndpointOrigin <a name="CdnEndpointOrigin" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointOrigin;

CdnEndpointOrigin.builder()
    .hostName(java.lang.String)
    .name(java.lang.String)
//  .httpPort(java.lang.Number)
//  .httpsPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#host_name CdnEndpoint#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#http_port CdnEndpoint#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#https_port CdnEndpoint#https_port}. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#host_name CdnEndpoint#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#name CdnEndpoint#name}.

---

##### `httpPort`<sup>Optional</sup> <a name="httpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#http_port CdnEndpoint#http_port}.

---

##### `httpsPort`<sup>Optional</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#https_port CdnEndpoint#https_port}.

---

### CdnEndpointTimeouts <a name="CdnEndpointTimeouts" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointTimeouts;

CdnEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#create CdnEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#delete CdnEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#read CdnEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#update CdnEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#create CdnEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#delete CdnEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#read CdnEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/cdn_endpoint#update CdnEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnEndpointDeliveryRuleCacheExpirationActionOutputReference <a name="CdnEndpointDeliveryRuleCacheExpirationActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference;

new CdnEndpointDeliveryRuleCacheExpirationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.resetDuration"></a>

```java
public void resetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointDeliveryRuleCacheExpirationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---


### CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference <a name="CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference;

new CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointDeliveryRuleCacheKeyQueryStringAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---


### CdnEndpointDeliveryRuleCookiesConditionList <a name="CdnEndpointDeliveryRuleCookiesConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleCookiesConditionList;

new CdnEndpointDeliveryRuleCookiesConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleCookiesConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>>

---


### CdnEndpointDeliveryRuleCookiesConditionOutputReference <a name="CdnEndpointDeliveryRuleCookiesConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference;

new CdnEndpointDeliveryRuleCookiesConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>

---


### CdnEndpointDeliveryRuleDeviceConditionOutputReference <a name="CdnEndpointDeliveryRuleDeviceConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference;

new CdnEndpointDeliveryRuleDeviceConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference.property.internalValue"></a>

```java
public CdnEndpointDeliveryRuleDeviceCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---


### CdnEndpointDeliveryRuleHttpVersionConditionList <a name="CdnEndpointDeliveryRuleHttpVersionConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleHttpVersionConditionList;

new CdnEndpointDeliveryRuleHttpVersionConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleHttpVersionConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>>

---


### CdnEndpointDeliveryRuleHttpVersionConditionOutputReference <a name="CdnEndpointDeliveryRuleHttpVersionConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference;

new CdnEndpointDeliveryRuleHttpVersionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>

---


### CdnEndpointDeliveryRuleList <a name="CdnEndpointDeliveryRuleList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleList;

new CdnEndpointDeliveryRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get"></a>

```java
public CdnEndpointDeliveryRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>>

---


### CdnEndpointDeliveryRuleModifyRequestHeaderActionList <a name="CdnEndpointDeliveryRuleModifyRequestHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList;

new CdnEndpointDeliveryRuleModifyRequestHeaderActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get"></a>

```java
public CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>>

---


### CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference <a name="CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference;

new CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>

---


### CdnEndpointDeliveryRuleModifyResponseHeaderActionList <a name="CdnEndpointDeliveryRuleModifyResponseHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList;

new CdnEndpointDeliveryRuleModifyResponseHeaderActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get"></a>

```java
public CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>>

---


### CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference <a name="CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference;

new CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>

---


### CdnEndpointDeliveryRuleOutputReference <a name="CdnEndpointDeliveryRuleOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleOutputReference;

new CdnEndpointDeliveryRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction">putCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction">putCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition">putCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition">putDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition">putHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction">putModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction">putModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition">putPostArgCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition">putQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition">putRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition">putRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition">putRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition">putRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition">putRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition">putRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition">putUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition">putUrlFileNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition">putUrlPathCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction">putUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction">putUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheExpirationAction">resetCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheKeyQueryStringAction">resetCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCookiesCondition">resetCookiesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetDeviceCondition">resetDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetHttpVersionCondition">resetHttpVersionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyRequestHeaderAction">resetModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyResponseHeaderAction">resetModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetPostArgCondition">resetPostArgCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetQueryStringCondition">resetQueryStringCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRemoteAddressCondition">resetRemoteAddressCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestBodyCondition">resetRequestBodyCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestHeaderCondition">resetRequestHeaderCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestMethodCondition">resetRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestSchemeCondition">resetRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestUriCondition">resetRequestUriCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileExtensionCondition">resetUrlFileExtensionCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileNameCondition">resetUrlFileNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlPathCondition">resetUrlPathCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRedirectAction">resetUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRewriteAction">resetUrlRewriteAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheExpirationAction` <a name="putCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction"></a>

```java
public void putCacheExpirationAction(CdnEndpointDeliveryRuleCacheExpirationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheExpirationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---

##### `putCacheKeyQueryStringAction` <a name="putCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction"></a>

```java
public void putCacheKeyQueryStringAction(CdnEndpointDeliveryRuleCacheKeyQueryStringAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCacheKeyQueryStringAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `putCookiesCondition` <a name="putCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition"></a>

```java
public void putCookiesCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleCookiesCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putCookiesCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>>

---

##### `putDeviceCondition` <a name="putDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition"></a>

```java
public void putDeviceCondition(CdnEndpointDeliveryRuleDeviceCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putDeviceCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---

##### `putHttpVersionCondition` <a name="putHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition"></a>

```java
public void putHttpVersionCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleHttpVersionCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putHttpVersionCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>>

---

##### `putModifyRequestHeaderAction` <a name="putModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction"></a>

```java
public void putModifyRequestHeaderAction(IResolvable OR java.util.List<CdnEndpointDeliveryRuleModifyRequestHeaderAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyRequestHeaderAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>>

---

##### `putModifyResponseHeaderAction` <a name="putModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction"></a>

```java
public void putModifyResponseHeaderAction(IResolvable OR java.util.List<CdnEndpointDeliveryRuleModifyResponseHeaderAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putModifyResponseHeaderAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>>

---

##### `putPostArgCondition` <a name="putPostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition"></a>

```java
public void putPostArgCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRulePostArgCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putPostArgCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>>

---

##### `putQueryStringCondition` <a name="putQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition"></a>

```java
public void putQueryStringCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleQueryStringCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putQueryStringCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>>

---

##### `putRemoteAddressCondition` <a name="putRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition"></a>

```java
public void putRemoteAddressCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleRemoteAddressCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRemoteAddressCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>>

---

##### `putRequestBodyCondition` <a name="putRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition"></a>

```java
public void putRequestBodyCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleRequestBodyCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestBodyCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>>

---

##### `putRequestHeaderCondition` <a name="putRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition"></a>

```java
public void putRequestHeaderCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleRequestHeaderCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestHeaderCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>>

---

##### `putRequestMethodCondition` <a name="putRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition"></a>

```java
public void putRequestMethodCondition(CdnEndpointDeliveryRuleRequestMethodCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestMethodCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---

##### `putRequestSchemeCondition` <a name="putRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition"></a>

```java
public void putRequestSchemeCondition(CdnEndpointDeliveryRuleRequestSchemeCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestSchemeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---

##### `putRequestUriCondition` <a name="putRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition"></a>

```java
public void putRequestUriCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleRequestUriCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putRequestUriCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>>

---

##### `putUrlFileExtensionCondition` <a name="putUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition"></a>

```java
public void putUrlFileExtensionCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleUrlFileExtensionCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileExtensionCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>>

---

##### `putUrlFileNameCondition` <a name="putUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition"></a>

```java
public void putUrlFileNameCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleUrlFileNameCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlFileNameCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>>

---

##### `putUrlPathCondition` <a name="putUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition"></a>

```java
public void putUrlPathCondition(IResolvable OR java.util.List<CdnEndpointDeliveryRuleUrlPathCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlPathCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>>

---

##### `putUrlRedirectAction` <a name="putUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction"></a>

```java
public void putUrlRedirectAction(CdnEndpointDeliveryRuleUrlRedirectAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---

##### `putUrlRewriteAction` <a name="putUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction"></a>

```java
public void putUrlRewriteAction(CdnEndpointDeliveryRuleUrlRewriteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.putUrlRewriteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---

##### `resetCacheExpirationAction` <a name="resetCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheExpirationAction"></a>

```java
public void resetCacheExpirationAction()
```

##### `resetCacheKeyQueryStringAction` <a name="resetCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCacheKeyQueryStringAction"></a>

```java
public void resetCacheKeyQueryStringAction()
```

##### `resetCookiesCondition` <a name="resetCookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetCookiesCondition"></a>

```java
public void resetCookiesCondition()
```

##### `resetDeviceCondition` <a name="resetDeviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetDeviceCondition"></a>

```java
public void resetDeviceCondition()
```

##### `resetHttpVersionCondition` <a name="resetHttpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetHttpVersionCondition"></a>

```java
public void resetHttpVersionCondition()
```

##### `resetModifyRequestHeaderAction` <a name="resetModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyRequestHeaderAction"></a>

```java
public void resetModifyRequestHeaderAction()
```

##### `resetModifyResponseHeaderAction` <a name="resetModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetModifyResponseHeaderAction"></a>

```java
public void resetModifyResponseHeaderAction()
```

##### `resetPostArgCondition` <a name="resetPostArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetPostArgCondition"></a>

```java
public void resetPostArgCondition()
```

##### `resetQueryStringCondition` <a name="resetQueryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetQueryStringCondition"></a>

```java
public void resetQueryStringCondition()
```

##### `resetRemoteAddressCondition` <a name="resetRemoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRemoteAddressCondition"></a>

```java
public void resetRemoteAddressCondition()
```

##### `resetRequestBodyCondition` <a name="resetRequestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestBodyCondition"></a>

```java
public void resetRequestBodyCondition()
```

##### `resetRequestHeaderCondition` <a name="resetRequestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestHeaderCondition"></a>

```java
public void resetRequestHeaderCondition()
```

##### `resetRequestMethodCondition` <a name="resetRequestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestMethodCondition"></a>

```java
public void resetRequestMethodCondition()
```

##### `resetRequestSchemeCondition` <a name="resetRequestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestSchemeCondition"></a>

```java
public void resetRequestSchemeCondition()
```

##### `resetRequestUriCondition` <a name="resetRequestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetRequestUriCondition"></a>

```java
public void resetRequestUriCondition()
```

##### `resetUrlFileExtensionCondition` <a name="resetUrlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileExtensionCondition"></a>

```java
public void resetUrlFileExtensionCondition()
```

##### `resetUrlFileNameCondition` <a name="resetUrlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlFileNameCondition"></a>

```java
public void resetUrlFileNameCondition()
```

##### `resetUrlPathCondition` <a name="resetUrlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlPathCondition"></a>

```java
public void resetUrlPathCondition()
```

##### `resetUrlRedirectAction` <a name="resetUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRedirectAction"></a>

```java
public void resetUrlRedirectAction()
```

##### `resetUrlRewriteAction` <a name="resetUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.resetUrlRewriteAction"></a>

```java
public void resetUrlRewriteAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointDeliveryRuleCacheExpirationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesCondition">cookiesCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList">CdnEndpointDeliveryRuleCookiesConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceCondition">deviceCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference">CdnEndpointDeliveryRuleDeviceConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionCondition">httpVersionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList">CdnEndpointDeliveryRuleHttpVersionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList">CdnEndpointDeliveryRuleModifyRequestHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList">CdnEndpointDeliveryRuleModifyResponseHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgCondition">postArgCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList">CdnEndpointDeliveryRulePostArgConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringCondition">queryStringCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList">CdnEndpointDeliveryRuleQueryStringConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressCondition">remoteAddressCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList">CdnEndpointDeliveryRuleRemoteAddressConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyCondition">requestBodyCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList">CdnEndpointDeliveryRuleRequestBodyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderCondition">requestHeaderCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList">CdnEndpointDeliveryRuleRequestHeaderConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodCondition">requestMethodCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference">CdnEndpointDeliveryRuleRequestMethodConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeCondition">requestSchemeCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference">CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriCondition">requestUriCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList">CdnEndpointDeliveryRuleRequestUriConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionCondition">urlFileExtensionCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList">CdnEndpointDeliveryRuleUrlFileExtensionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameCondition">urlFileNameCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList">CdnEndpointDeliveryRuleUrlFileNameConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathCondition">urlPathCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList">CdnEndpointDeliveryRuleUrlPathConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointDeliveryRuleUrlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointDeliveryRuleUrlRewriteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationActionInput">cacheExpirationActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput">cacheKeyQueryStringActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesConditionInput">cookiesConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceConditionInput">deviceConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionConditionInput">httpVersionConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput">modifyRequestHeaderActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput">modifyResponseHeaderActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgConditionInput">postArgConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringConditionInput">queryStringConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressConditionInput">remoteAddressConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyConditionInput">requestBodyConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderConditionInput">requestHeaderConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodConditionInput">requestMethodConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeConditionInput">requestSchemeConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriConditionInput">requestUriConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionConditionInput">urlFileExtensionConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameConditionInput">urlFileNameConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathConditionInput">urlPathConditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectActionInput">urlRedirectActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteActionInput">urlRewriteActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheExpirationAction`<sup>Required</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationAction"></a>

```java
public CdnEndpointDeliveryRuleCacheExpirationActionOutputReference getCacheExpirationAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointDeliveryRuleCacheExpirationActionOutputReference</a>

---

##### `cacheKeyQueryStringAction`<sup>Required</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringAction"></a>

```java
public CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference getCacheKeyQueryStringAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointDeliveryRuleCacheKeyQueryStringActionOutputReference</a>

---

##### `cookiesCondition`<sup>Required</sup> <a name="cookiesCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesCondition"></a>

```java
public CdnEndpointDeliveryRuleCookiesConditionList getCookiesCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesConditionList">CdnEndpointDeliveryRuleCookiesConditionList</a>

---

##### `deviceCondition`<sup>Required</sup> <a name="deviceCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceCondition"></a>

```java
public CdnEndpointDeliveryRuleDeviceConditionOutputReference getDeviceCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceConditionOutputReference">CdnEndpointDeliveryRuleDeviceConditionOutputReference</a>

---

##### `httpVersionCondition`<sup>Required</sup> <a name="httpVersionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionCondition"></a>

```java
public CdnEndpointDeliveryRuleHttpVersionConditionList getHttpVersionCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionConditionList">CdnEndpointDeliveryRuleHttpVersionConditionList</a>

---

##### `modifyRequestHeaderAction`<sup>Required</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderAction"></a>

```java
public CdnEndpointDeliveryRuleModifyRequestHeaderActionList getModifyRequestHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderActionList">CdnEndpointDeliveryRuleModifyRequestHeaderActionList</a>

---

##### `modifyResponseHeaderAction`<sup>Required</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderAction"></a>

```java
public CdnEndpointDeliveryRuleModifyResponseHeaderActionList getModifyResponseHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderActionList">CdnEndpointDeliveryRuleModifyResponseHeaderActionList</a>

---

##### `postArgCondition`<sup>Required</sup> <a name="postArgCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgCondition"></a>

```java
public CdnEndpointDeliveryRulePostArgConditionList getPostArgCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList">CdnEndpointDeliveryRulePostArgConditionList</a>

---

##### `queryStringCondition`<sup>Required</sup> <a name="queryStringCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringCondition"></a>

```java
public CdnEndpointDeliveryRuleQueryStringConditionList getQueryStringCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList">CdnEndpointDeliveryRuleQueryStringConditionList</a>

---

##### `remoteAddressCondition`<sup>Required</sup> <a name="remoteAddressCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressCondition"></a>

```java
public CdnEndpointDeliveryRuleRemoteAddressConditionList getRemoteAddressCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList">CdnEndpointDeliveryRuleRemoteAddressConditionList</a>

---

##### `requestBodyCondition`<sup>Required</sup> <a name="requestBodyCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyCondition"></a>

```java
public CdnEndpointDeliveryRuleRequestBodyConditionList getRequestBodyCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList">CdnEndpointDeliveryRuleRequestBodyConditionList</a>

---

##### `requestHeaderCondition`<sup>Required</sup> <a name="requestHeaderCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderCondition"></a>

```java
public CdnEndpointDeliveryRuleRequestHeaderConditionList getRequestHeaderCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList">CdnEndpointDeliveryRuleRequestHeaderConditionList</a>

---

##### `requestMethodCondition`<sup>Required</sup> <a name="requestMethodCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodCondition"></a>

```java
public CdnEndpointDeliveryRuleRequestMethodConditionOutputReference getRequestMethodCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference">CdnEndpointDeliveryRuleRequestMethodConditionOutputReference</a>

---

##### `requestSchemeCondition`<sup>Required</sup> <a name="requestSchemeCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeCondition"></a>

```java
public CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference getRequestSchemeCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference">CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference</a>

---

##### `requestUriCondition`<sup>Required</sup> <a name="requestUriCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriCondition"></a>

```java
public CdnEndpointDeliveryRuleRequestUriConditionList getRequestUriCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList">CdnEndpointDeliveryRuleRequestUriConditionList</a>

---

##### `urlFileExtensionCondition`<sup>Required</sup> <a name="urlFileExtensionCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionCondition"></a>

```java
public CdnEndpointDeliveryRuleUrlFileExtensionConditionList getUrlFileExtensionCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList">CdnEndpointDeliveryRuleUrlFileExtensionConditionList</a>

---

##### `urlFileNameCondition`<sup>Required</sup> <a name="urlFileNameCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameCondition"></a>

```java
public CdnEndpointDeliveryRuleUrlFileNameConditionList getUrlFileNameCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList">CdnEndpointDeliveryRuleUrlFileNameConditionList</a>

---

##### `urlPathCondition`<sup>Required</sup> <a name="urlPathCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathCondition"></a>

```java
public CdnEndpointDeliveryRuleUrlPathConditionList getUrlPathCondition();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList">CdnEndpointDeliveryRuleUrlPathConditionList</a>

---

##### `urlRedirectAction`<sup>Required</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectAction"></a>

```java
public CdnEndpointDeliveryRuleUrlRedirectActionOutputReference getUrlRedirectAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointDeliveryRuleUrlRedirectActionOutputReference</a>

---

##### `urlRewriteAction`<sup>Required</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteAction"></a>

```java
public CdnEndpointDeliveryRuleUrlRewriteActionOutputReference getUrlRewriteAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointDeliveryRuleUrlRewriteActionOutputReference</a>

---

##### `cacheExpirationActionInput`<sup>Optional</sup> <a name="cacheExpirationActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheExpirationActionInput"></a>

```java
public CdnEndpointDeliveryRuleCacheExpirationAction getCacheExpirationActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheExpirationAction">CdnEndpointDeliveryRuleCacheExpirationAction</a>

---

##### `cacheKeyQueryStringActionInput`<sup>Optional</sup> <a name="cacheKeyQueryStringActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput"></a>

```java
public CdnEndpointDeliveryRuleCacheKeyQueryStringAction getCacheKeyQueryStringActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCacheKeyQueryStringAction">CdnEndpointDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `cookiesConditionInput`<sup>Optional</sup> <a name="cookiesConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.cookiesConditionInput"></a>

```java
public java.lang.Object getCookiesConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleCookiesCondition">CdnEndpointDeliveryRuleCookiesCondition</a>>

---

##### `deviceConditionInput`<sup>Optional</sup> <a name="deviceConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.deviceConditionInput"></a>

```java
public CdnEndpointDeliveryRuleDeviceCondition getDeviceConditionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleDeviceCondition">CdnEndpointDeliveryRuleDeviceCondition</a>

---

##### `httpVersionConditionInput`<sup>Optional</sup> <a name="httpVersionConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.httpVersionConditionInput"></a>

```java
public java.lang.Object getHttpVersionConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleHttpVersionCondition">CdnEndpointDeliveryRuleHttpVersionCondition</a>>

---

##### `modifyRequestHeaderActionInput`<sup>Optional</sup> <a name="modifyRequestHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput"></a>

```java
public java.lang.Object getModifyRequestHeaderActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyRequestHeaderAction">CdnEndpointDeliveryRuleModifyRequestHeaderAction</a>>

---

##### `modifyResponseHeaderActionInput`<sup>Optional</sup> <a name="modifyResponseHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput"></a>

```java
public java.lang.Object getModifyResponseHeaderActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleModifyResponseHeaderAction">CdnEndpointDeliveryRuleModifyResponseHeaderAction</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `postArgConditionInput`<sup>Optional</sup> <a name="postArgConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.postArgConditionInput"></a>

```java
public java.lang.Object getPostArgConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>>

---

##### `queryStringConditionInput`<sup>Optional</sup> <a name="queryStringConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.queryStringConditionInput"></a>

```java
public java.lang.Object getQueryStringConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>>

---

##### `remoteAddressConditionInput`<sup>Optional</sup> <a name="remoteAddressConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.remoteAddressConditionInput"></a>

```java
public java.lang.Object getRemoteAddressConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>>

---

##### `requestBodyConditionInput`<sup>Optional</sup> <a name="requestBodyConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestBodyConditionInput"></a>

```java
public java.lang.Object getRequestBodyConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>>

---

##### `requestHeaderConditionInput`<sup>Optional</sup> <a name="requestHeaderConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestHeaderConditionInput"></a>

```java
public java.lang.Object getRequestHeaderConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>>

---

##### `requestMethodConditionInput`<sup>Optional</sup> <a name="requestMethodConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestMethodConditionInput"></a>

```java
public CdnEndpointDeliveryRuleRequestMethodCondition getRequestMethodConditionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---

##### `requestSchemeConditionInput`<sup>Optional</sup> <a name="requestSchemeConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestSchemeConditionInput"></a>

```java
public CdnEndpointDeliveryRuleRequestSchemeCondition getRequestSchemeConditionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---

##### `requestUriConditionInput`<sup>Optional</sup> <a name="requestUriConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.requestUriConditionInput"></a>

```java
public java.lang.Object getRequestUriConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>>

---

##### `urlFileExtensionConditionInput`<sup>Optional</sup> <a name="urlFileExtensionConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileExtensionConditionInput"></a>

```java
public java.lang.Object getUrlFileExtensionConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>>

---

##### `urlFileNameConditionInput`<sup>Optional</sup> <a name="urlFileNameConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlFileNameConditionInput"></a>

```java
public java.lang.Object getUrlFileNameConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>>

---

##### `urlPathConditionInput`<sup>Optional</sup> <a name="urlPathConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlPathConditionInput"></a>

```java
public java.lang.Object getUrlPathConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>>

---

##### `urlRedirectActionInput`<sup>Optional</sup> <a name="urlRedirectActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRedirectActionInput"></a>

```java
public CdnEndpointDeliveryRuleUrlRedirectAction getUrlRedirectActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---

##### `urlRewriteActionInput`<sup>Optional</sup> <a name="urlRewriteActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.urlRewriteActionInput"></a>

```java
public CdnEndpointDeliveryRuleUrlRewriteAction getUrlRewriteActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRule">CdnEndpointDeliveryRule</a>

---


### CdnEndpointDeliveryRulePostArgConditionList <a name="CdnEndpointDeliveryRulePostArgConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRulePostArgConditionList;

new CdnEndpointDeliveryRulePostArgConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get"></a>

```java
public CdnEndpointDeliveryRulePostArgConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>>

---


### CdnEndpointDeliveryRulePostArgConditionOutputReference <a name="CdnEndpointDeliveryRulePostArgConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference;

new CdnEndpointDeliveryRulePostArgConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRulePostArgCondition">CdnEndpointDeliveryRulePostArgCondition</a>

---


### CdnEndpointDeliveryRuleQueryStringConditionList <a name="CdnEndpointDeliveryRuleQueryStringConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleQueryStringConditionList;

new CdnEndpointDeliveryRuleQueryStringConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleQueryStringConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>>

---


### CdnEndpointDeliveryRuleQueryStringConditionOutputReference <a name="CdnEndpointDeliveryRuleQueryStringConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference;

new CdnEndpointDeliveryRuleQueryStringConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleQueryStringCondition">CdnEndpointDeliveryRuleQueryStringCondition</a>

---


### CdnEndpointDeliveryRuleRemoteAddressConditionList <a name="CdnEndpointDeliveryRuleRemoteAddressConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList;

new CdnEndpointDeliveryRuleRemoteAddressConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>>

---


### CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference <a name="CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference;

new CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRemoteAddressCondition">CdnEndpointDeliveryRuleRemoteAddressCondition</a>

---


### CdnEndpointDeliveryRuleRequestBodyConditionList <a name="CdnEndpointDeliveryRuleRequestBodyConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestBodyConditionList;

new CdnEndpointDeliveryRuleRequestBodyConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleRequestBodyConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>>

---


### CdnEndpointDeliveryRuleRequestBodyConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestBodyConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference;

new CdnEndpointDeliveryRuleRequestBodyConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestBodyCondition">CdnEndpointDeliveryRuleRequestBodyCondition</a>

---


### CdnEndpointDeliveryRuleRequestHeaderConditionList <a name="CdnEndpointDeliveryRuleRequestHeaderConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList;

new CdnEndpointDeliveryRuleRequestHeaderConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>>

---


### CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference;

new CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selector">selector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selectorInput"></a>

```java
public java.lang.String getSelectorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.selector"></a>

```java
public java.lang.String getSelector();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestHeaderCondition">CdnEndpointDeliveryRuleRequestHeaderCondition</a>

---


### CdnEndpointDeliveryRuleRequestMethodConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestMethodConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference;

new CdnEndpointDeliveryRuleRequestMethodConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodConditionOutputReference.property.internalValue"></a>

```java
public CdnEndpointDeliveryRuleRequestMethodCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestMethodCondition">CdnEndpointDeliveryRuleRequestMethodCondition</a>

---


### CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference;

new CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeConditionOutputReference.property.internalValue"></a>

```java
public CdnEndpointDeliveryRuleRequestSchemeCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestSchemeCondition">CdnEndpointDeliveryRuleRequestSchemeCondition</a>

---


### CdnEndpointDeliveryRuleRequestUriConditionList <a name="CdnEndpointDeliveryRuleRequestUriConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestUriConditionList;

new CdnEndpointDeliveryRuleRequestUriConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleRequestUriConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>>

---


### CdnEndpointDeliveryRuleRequestUriConditionOutputReference <a name="CdnEndpointDeliveryRuleRequestUriConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference;

new CdnEndpointDeliveryRuleRequestUriConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleRequestUriCondition">CdnEndpointDeliveryRuleRequestUriCondition</a>

---


### CdnEndpointDeliveryRuleUrlFileExtensionConditionList <a name="CdnEndpointDeliveryRuleUrlFileExtensionConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList;

new CdnEndpointDeliveryRuleUrlFileExtensionConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>>

---


### CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference;

new CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileExtensionCondition">CdnEndpointDeliveryRuleUrlFileExtensionCondition</a>

---


### CdnEndpointDeliveryRuleUrlFileNameConditionList <a name="CdnEndpointDeliveryRuleUrlFileNameConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList;

new CdnEndpointDeliveryRuleUrlFileNameConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>>

---


### CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference;

new CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlFileNameCondition">CdnEndpointDeliveryRuleUrlFileNameCondition</a>

---


### CdnEndpointDeliveryRuleUrlPathConditionList <a name="CdnEndpointDeliveryRuleUrlPathConditionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlPathConditionList;

new CdnEndpointDeliveryRuleUrlPathConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get"></a>

```java
public CdnEndpointDeliveryRuleUrlPathConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>>

---


### CdnEndpointDeliveryRuleUrlPathConditionOutputReference <a name="CdnEndpointDeliveryRuleUrlPathConditionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference;

new CdnEndpointDeliveryRuleUrlPathConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetMatchValues">resetMatchValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetNegateCondition">resetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetTransforms">resetTransforms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValues` <a name="resetMatchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetMatchValues"></a>

```java
public void resetMatchValues()
```

##### `resetNegateCondition` <a name="resetNegateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetNegateCondition"></a>

```java
public void resetNegateCondition()
```

##### `resetTransforms` <a name="resetTransforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.resetTransforms"></a>

```java
public void resetTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValuesInput">matchValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateConditionInput">negateConditionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transformsInput">transformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValues">matchValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateCondition">negateCondition</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transforms">transforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchValuesInput`<sup>Optional</sup> <a name="matchValuesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValuesInput"></a>

```java
public java.util.List<java.lang.String> getMatchValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateConditionInput`<sup>Optional</sup> <a name="negateConditionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateConditionInput"></a>

```java
public java.lang.Object getNegateConditionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `transformsInput`<sup>Optional</sup> <a name="transformsInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transformsInput"></a>

```java
public java.util.List<java.lang.String> getTransformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `matchValues`<sup>Required</sup> <a name="matchValues" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.matchValues"></a>

```java
public java.util.List<java.lang.String> getMatchValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateCondition`<sup>Required</sup> <a name="negateCondition" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.negateCondition"></a>

```java
public java.lang.Object getNegateCondition();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.transforms"></a>

```java
public java.util.List<java.lang.String> getTransforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlPathCondition">CdnEndpointDeliveryRuleUrlPathCondition</a>

---


### CdnEndpointDeliveryRuleUrlRedirectActionOutputReference <a name="CdnEndpointDeliveryRuleUrlRedirectActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference;

new CdnEndpointDeliveryRuleUrlRedirectActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetFragment">resetFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFragment` <a name="resetFragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetFragment"></a>

```java
public void resetFragment()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput">fragmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragment">fragment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fragmentInput`<sup>Optional</sup> <a name="fragmentInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput"></a>

```java
public java.lang.String getFragmentInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput"></a>

```java
public java.lang.String getRedirectTypeInput();
```

- *Type:* java.lang.String

---

##### `fragment`<sup>Required</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.fragment"></a>

```java
public java.lang.String getFragment();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointDeliveryRuleUrlRedirectAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRedirectAction">CdnEndpointDeliveryRuleUrlRedirectAction</a>

---


### CdnEndpointDeliveryRuleUrlRewriteActionOutputReference <a name="CdnEndpointDeliveryRuleUrlRewriteActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference;

new CdnEndpointDeliveryRuleUrlRewriteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath">resetPreserveUnmatchedPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveUnmatchedPath` <a name="resetPreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath"></a>

```java
public void resetPreserveUnmatchedPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput">preserveUnmatchedPathInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput">sourcePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern">sourcePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `preserveUnmatchedPathInput`<sup>Optional</sup> <a name="preserveUnmatchedPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput"></a>

```java
public java.lang.Object getPreserveUnmatchedPathInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourcePatternInput`<sup>Optional</sup> <a name="sourcePatternInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput"></a>

```java
public java.lang.String getSourcePatternInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `preserveUnmatchedPath`<sup>Required</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath"></a>

```java
public java.lang.Object getPreserveUnmatchedPath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern"></a>

```java
public java.lang.String getSourcePattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointDeliveryRuleUrlRewriteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointDeliveryRuleUrlRewriteAction">CdnEndpointDeliveryRuleUrlRewriteAction</a>

---


### CdnEndpointGeoFilterList <a name="CdnEndpointGeoFilterList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGeoFilterList;

new CdnEndpointGeoFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get"></a>

```java
public CdnEndpointGeoFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>>

---


### CdnEndpointGeoFilterOutputReference <a name="CdnEndpointGeoFilterOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGeoFilterOutputReference;

new CdnEndpointGeoFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodesInput">countryCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePathInput">relativePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodes">countryCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePath">relativePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `countryCodesInput`<sup>Optional</sup> <a name="countryCodesInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodesInput"></a>

```java
public java.util.List<java.lang.String> getCountryCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relativePathInput`<sup>Optional</sup> <a name="relativePathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePathInput"></a>

```java
public java.lang.String getRelativePathInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `countryCodes`<sup>Required</sup> <a name="countryCodes" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.countryCodes"></a>

```java
public java.util.List<java.lang.String> getCountryCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relativePath`<sup>Required</sup> <a name="relativePath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.relativePath"></a>

```java
public java.lang.String getRelativePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGeoFilter">CdnEndpointGeoFilter</a>

---


### CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference;

new CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.resetDuration"></a>

```java
public void resetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheExpirationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---


### CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference;

new CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---


### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList;

new CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get"></a>

```java
public CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>>

---


### CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference;

new CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>

---


### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList;

new CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get"></a>

```java
public CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>>

---


### CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference;

new CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>

---


### CdnEndpointGlobalDeliveryRuleOutputReference <a name="CdnEndpointGlobalDeliveryRuleOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleOutputReference;

new CdnEndpointGlobalDeliveryRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction">putCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction">putCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction">putModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction">putModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction">putUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction">putUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheExpirationAction">resetCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheKeyQueryStringAction">resetCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyRequestHeaderAction">resetModifyRequestHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyResponseHeaderAction">resetModifyResponseHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRedirectAction">resetUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRewriteAction">resetUrlRewriteAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCacheExpirationAction` <a name="putCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction"></a>

```java
public void putCacheExpirationAction(CdnEndpointGlobalDeliveryRuleCacheExpirationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheExpirationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---

##### `putCacheKeyQueryStringAction` <a name="putCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction"></a>

```java
public void putCacheKeyQueryStringAction(CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putCacheKeyQueryStringAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `putModifyRequestHeaderAction` <a name="putModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction"></a>

```java
public void putModifyRequestHeaderAction(IResolvable OR java.util.List<CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyRequestHeaderAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>>

---

##### `putModifyResponseHeaderAction` <a name="putModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction"></a>

```java
public void putModifyResponseHeaderAction(IResolvable OR java.util.List<CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putModifyResponseHeaderAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>>

---

##### `putUrlRedirectAction` <a name="putUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction"></a>

```java
public void putUrlRedirectAction(CdnEndpointGlobalDeliveryRuleUrlRedirectAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---

##### `putUrlRewriteAction` <a name="putUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction"></a>

```java
public void putUrlRewriteAction(CdnEndpointGlobalDeliveryRuleUrlRewriteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.putUrlRewriteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---

##### `resetCacheExpirationAction` <a name="resetCacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheExpirationAction"></a>

```java
public void resetCacheExpirationAction()
```

##### `resetCacheKeyQueryStringAction` <a name="resetCacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetCacheKeyQueryStringAction"></a>

```java
public void resetCacheKeyQueryStringAction()
```

##### `resetModifyRequestHeaderAction` <a name="resetModifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyRequestHeaderAction"></a>

```java
public void resetModifyRequestHeaderAction()
```

##### `resetModifyResponseHeaderAction` <a name="resetModifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetModifyResponseHeaderAction"></a>

```java
public void resetModifyResponseHeaderAction()
```

##### `resetUrlRedirectAction` <a name="resetUrlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRedirectAction"></a>

```java
public void resetUrlRedirectAction()
```

##### `resetUrlRewriteAction` <a name="resetUrlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.resetUrlRewriteAction"></a>

```java
public void resetUrlRewriteAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationAction">cacheExpirationAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringAction">cacheKeyQueryStringAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderAction">modifyRequestHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderAction">modifyResponseHeaderAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectAction">urlRedirectAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteAction">urlRewriteAction</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationActionInput">cacheExpirationActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput">cacheKeyQueryStringActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput">modifyRequestHeaderActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput">modifyResponseHeaderActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectActionInput">urlRedirectActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteActionInput">urlRewriteActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheExpirationAction`<sup>Required</sup> <a name="cacheExpirationAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference getCacheExpirationAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheExpirationActionOutputReference</a>

---

##### `cacheKeyQueryStringAction`<sup>Required</sup> <a name="cacheKeyQueryStringAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference getCacheKeyQueryStringAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringActionOutputReference</a>

---

##### `modifyRequestHeaderAction`<sup>Required</sup> <a name="modifyRequestHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList getModifyRequestHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderActionList</a>

---

##### `modifyResponseHeaderAction`<sup>Required</sup> <a name="modifyResponseHeaderAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList getModifyResponseHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderActionList</a>

---

##### `urlRedirectAction`<sup>Required</sup> <a name="urlRedirectAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference getUrlRedirectAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference</a>

---

##### `urlRewriteAction`<sup>Required</sup> <a name="urlRewriteAction" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteAction"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference getUrlRewriteAction();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference">CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference</a>

---

##### `cacheExpirationActionInput`<sup>Optional</sup> <a name="cacheExpirationActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheExpirationActionInput"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheExpirationAction getCacheExpirationActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheExpirationAction">CdnEndpointGlobalDeliveryRuleCacheExpirationAction</a>

---

##### `cacheKeyQueryStringActionInput`<sup>Optional</sup> <a name="cacheKeyQueryStringActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.cacheKeyQueryStringActionInput"></a>

```java
public CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction getCacheKeyQueryStringActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction">CdnEndpointGlobalDeliveryRuleCacheKeyQueryStringAction</a>

---

##### `modifyRequestHeaderActionInput`<sup>Optional</sup> <a name="modifyRequestHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyRequestHeaderActionInput"></a>

```java
public java.lang.Object getModifyRequestHeaderActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction">CdnEndpointGlobalDeliveryRuleModifyRequestHeaderAction</a>>

---

##### `modifyResponseHeaderActionInput`<sup>Optional</sup> <a name="modifyResponseHeaderActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.modifyResponseHeaderActionInput"></a>

```java
public java.lang.Object getModifyResponseHeaderActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction">CdnEndpointGlobalDeliveryRuleModifyResponseHeaderAction</a>>

---

##### `urlRedirectActionInput`<sup>Optional</sup> <a name="urlRedirectActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRedirectActionInput"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRedirectAction getUrlRedirectActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---

##### `urlRewriteActionInput`<sup>Optional</sup> <a name="urlRewriteActionInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.urlRewriteActionInput"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRewriteAction getUrlRewriteActionInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleOutputReference.property.internalValue"></a>

```java
public CdnEndpointGlobalDeliveryRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRule">CdnEndpointGlobalDeliveryRule</a>

---


### CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference;

new CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetFragment">resetFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFragment` <a name="resetFragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetFragment"></a>

```java
public void resetFragment()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput">fragmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput">redirectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragment">fragment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectType">redirectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fragmentInput`<sup>Optional</sup> <a name="fragmentInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragmentInput"></a>

```java
public java.lang.String getFragmentInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `redirectTypeInput`<sup>Optional</sup> <a name="redirectTypeInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectTypeInput"></a>

```java
public java.lang.String getRedirectTypeInput();
```

- *Type:* java.lang.String

---

##### `fragment`<sup>Required</sup> <a name="fragment" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.fragment"></a>

```java
public java.lang.String getFragment();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `redirectType`<sup>Required</sup> <a name="redirectType" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.redirectType"></a>

```java
public java.lang.String getRedirectType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRedirectAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRedirectAction">CdnEndpointGlobalDeliveryRuleUrlRedirectAction</a>

---


### CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference <a name="CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference;

new CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath">resetPreserveUnmatchedPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveUnmatchedPath` <a name="resetPreserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.resetPreserveUnmatchedPath"></a>

```java
public void resetPreserveUnmatchedPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput">preserveUnmatchedPathInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput">sourcePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath">preserveUnmatchedPath</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern">sourcePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `preserveUnmatchedPathInput`<sup>Optional</sup> <a name="preserveUnmatchedPathInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPathInput"></a>

```java
public java.lang.Object getPreserveUnmatchedPathInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourcePatternInput`<sup>Optional</sup> <a name="sourcePatternInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePatternInput"></a>

```java
public java.lang.String getSourcePatternInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `preserveUnmatchedPath`<sup>Required</sup> <a name="preserveUnmatchedPath" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.preserveUnmatchedPath"></a>

```java
public java.lang.Object getPreserveUnmatchedPath();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourcePattern`<sup>Required</sup> <a name="sourcePattern" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.sourcePattern"></a>

```java
public java.lang.String getSourcePattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteActionOutputReference.property.internalValue"></a>

```java
public CdnEndpointGlobalDeliveryRuleUrlRewriteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointGlobalDeliveryRuleUrlRewriteAction">CdnEndpointGlobalDeliveryRuleUrlRewriteAction</a>

---


### CdnEndpointOriginList <a name="CdnEndpointOriginList" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointOriginList;

new CdnEndpointOriginList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get"></a>

```java
public CdnEndpointOriginOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>>

---


### CdnEndpointOriginOutputReference <a name="CdnEndpointOriginOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointOriginOutputReference;

new CdnEndpointOriginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpPort">resetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpsPort">resetHttpsPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpPort` <a name="resetHttpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpPort"></a>

```java
public void resetHttpPort()
```

##### `resetHttpsPort` <a name="resetHttpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.resetHttpsPort"></a>

```java
public void resetHttpsPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPortInput">httpPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPortInput">httpsPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPortInput"></a>

```java
public java.lang.Number getHttpPortInput();
```

- *Type:* java.lang.Number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPortInput"></a>

```java
public java.lang.Number getHttpsPortInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOriginOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointOrigin">CdnEndpointOrigin</a>

---


### CdnEndpointTimeoutsOutputReference <a name="CdnEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_endpoint.CdnEndpointTimeoutsOutputReference;

new CdnEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnEndpoint.CdnEndpointTimeouts">CdnEndpointTimeouts</a>

---



