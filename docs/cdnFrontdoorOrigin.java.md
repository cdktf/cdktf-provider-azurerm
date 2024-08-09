# `cdnFrontdoorOrigin` Submodule <a name="`cdnFrontdoorOrigin` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorOrigin <a name="CdnFrontdoorOrigin" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin azurerm_cdn_frontdoor_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOrigin;

CdnFrontdoorOrigin.Builder.create(Construct scope, java.lang.String id)
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
    .cdnFrontdoorOriginGroupId(java.lang.String)
    .certificateNameCheckEnabled(java.lang.Boolean)
    .certificateNameCheckEnabled(IResolvable)
    .hostName(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .healthProbesEnabled(java.lang.Boolean)
//  .healthProbesEnabled(IResolvable)
//  .httpPort(java.lang.Number)
//  .httpsPort(java.lang.Number)
//  .id(java.lang.String)
//  .originHostHeader(java.lang.String)
//  .priority(java.lang.Number)
//  .privateLink(CdnFrontdoorOriginPrivateLink)
//  .timeouts(CdnFrontdoorOriginTimeouts)
//  .weight(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.certificateNameCheckEnabled">certificateNameCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.healthProbesEnabled">healthProbesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.originHostHeader">originHostHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.privateLink">privateLink</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.cdnFrontdoorOriginGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}.

---

##### `certificateNameCheckEnabled`<sup>Required</sup> <a name="certificateNameCheckEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.certificateNameCheckEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.hostName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}.

---

##### `healthProbesEnabled`<sup>Optional</sup> <a name="healthProbesEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.healthProbesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}.

---

##### `httpPort`<sup>Optional</sup> <a name="httpPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}.

---

##### `httpsPort`<sup>Optional</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.httpsPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `originHostHeader`<sup>Optional</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.originHostHeader"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}.

---

##### `privateLink`<sup>Optional</sup> <a name="privateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.privateLink"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#private_link CdnFrontdoorOrigin#private_link}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#timeouts CdnFrontdoorOrigin#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.Initializer.parameter.weight"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink">putPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHealthProbesEnabled">resetHealthProbesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpPort">resetHttpPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpsPort">resetHttpsPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOriginHostHeader">resetOriginHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPrivateLink">resetPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrivateLink` <a name="putPrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink"></a>

```java
public void putPrivateLink(CdnFrontdoorOriginPrivateLink value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putPrivateLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorOriginTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHealthProbesEnabled` <a name="resetHealthProbesEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHealthProbesEnabled"></a>

```java
public void resetHealthProbesEnabled()
```

##### `resetHttpPort` <a name="resetHttpPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpPort"></a>

```java
public void resetHttpPort()
```

##### `resetHttpsPort` <a name="resetHttpsPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetHttpsPort"></a>

```java
public void resetHttpsPort()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetId"></a>

```java
public void resetId()
```

##### `resetOriginHostHeader` <a name="resetOriginHostHeader" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetOriginHostHeader"></a>

```java
public void resetOriginHostHeader()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetPrivateLink` <a name="resetPrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetPrivateLink"></a>

```java
public void resetPrivateLink()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.resetWeight"></a>

```java
public void resetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOrigin;

CdnFrontdoorOrigin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOrigin;

CdnFrontdoorOrigin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOrigin;

CdnFrontdoorOrigin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOrigin;

CdnFrontdoorOrigin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorOrigin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnFrontdoorOrigin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLink">privateLink</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference">CdnFrontdoorOriginPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference">CdnFrontdoorOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupIdInput">cdnFrontdoorOriginGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabledInput">certificateNameCheckEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabledInput">healthProbesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPortInput">httpPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPortInput">httpsPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeaderInput">originHostHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLinkInput">privateLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabled">certificateNameCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabled">healthProbesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeader">originHostHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `privateLink`<sup>Required</sup> <a name="privateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLink"></a>

```java
public CdnFrontdoorOriginPrivateLinkOutputReference getPrivateLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference">CdnFrontdoorOriginPrivateLinkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeouts"></a>

```java
public CdnFrontdoorOriginTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference">CdnFrontdoorOriginTimeoutsOutputReference</a>

---

##### `cdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="cdnFrontdoorOriginGroupIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupIdInput"></a>

```java
public java.lang.String getCdnFrontdoorOriginGroupIdInput();
```

- *Type:* java.lang.String

---

##### `certificateNameCheckEnabledInput`<sup>Optional</sup> <a name="certificateNameCheckEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabledInput"></a>

```java
public java.lang.Object getCertificateNameCheckEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthProbesEnabledInput`<sup>Optional</sup> <a name="healthProbesEnabledInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabledInput"></a>

```java
public java.lang.Object getHealthProbesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `httpPortInput`<sup>Optional</sup> <a name="httpPortInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPortInput"></a>

```java
public java.lang.Number getHttpPortInput();
```

- *Type:* java.lang.Number

---

##### `httpsPortInput`<sup>Optional</sup> <a name="httpsPortInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPortInput"></a>

```java
public java.lang.Number getHttpsPortInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `originHostHeaderInput`<sup>Optional</sup> <a name="originHostHeaderInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeaderInput"></a>

```java
public java.lang.String getOriginHostHeaderInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `privateLinkInput`<sup>Optional</sup> <a name="privateLinkInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.privateLinkInput"></a>

```java
public CdnFrontdoorOriginPrivateLink getPrivateLinkInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.cdnFrontdoorOriginGroupId"></a>

```java
public java.lang.String getCdnFrontdoorOriginGroupId();
```

- *Type:* java.lang.String

---

##### `certificateNameCheckEnabled`<sup>Required</sup> <a name="certificateNameCheckEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.certificateNameCheckEnabled"></a>

```java
public java.lang.Object getCertificateNameCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthProbesEnabled`<sup>Required</sup> <a name="healthProbesEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.healthProbesEnabled"></a>

```java
public java.lang.Object getHealthProbesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `originHostHeader`<sup>Required</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.originHostHeader"></a>

```java
public java.lang.String getOriginHostHeader();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOrigin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorOriginConfig <a name="CdnFrontdoorOriginConfig" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOriginConfig;

CdnFrontdoorOriginConfig.builder()
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
    .cdnFrontdoorOriginGroupId(java.lang.String)
    .certificateNameCheckEnabled(java.lang.Boolean)
    .certificateNameCheckEnabled(IResolvable)
    .hostName(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .healthProbesEnabled(java.lang.Boolean)
//  .healthProbesEnabled(IResolvable)
//  .httpPort(java.lang.Number)
//  .httpsPort(java.lang.Number)
//  .id(java.lang.String)
//  .originHostHeader(java.lang.String)
//  .priority(java.lang.Number)
//  .privateLink(CdnFrontdoorOriginPrivateLink)
//  .timeouts(CdnFrontdoorOriginTimeouts)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.cdnFrontdoorOriginGroupId">cdnFrontdoorOriginGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.certificateNameCheckEnabled">certificateNameCheckEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.healthProbesEnabled">healthProbesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpPort">httpPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpsPort">httpsPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.originHostHeader">originHostHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.privateLink">privateLink</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="cdnFrontdoorOriginGroupId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.cdnFrontdoorOriginGroupId"></a>

```java
public java.lang.String getCdnFrontdoorOriginGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#cdn_frontdoor_origin_group_id CdnFrontdoorOrigin#cdn_frontdoor_origin_group_id}.

---

##### `certificateNameCheckEnabled`<sup>Required</sup> <a name="certificateNameCheckEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.certificateNameCheckEnabled"></a>

```java
public java.lang.Object getCertificateNameCheckEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#certificate_name_check_enabled CdnFrontdoorOrigin#certificate_name_check_enabled}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#host_name CdnFrontdoorOrigin#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#name CdnFrontdoorOrigin#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#enabled CdnFrontdoorOrigin#enabled}.

---

##### `healthProbesEnabled`<sup>Optional</sup> <a name="healthProbesEnabled" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.healthProbesEnabled"></a>

```java
public java.lang.Object getHealthProbesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#health_probes_enabled CdnFrontdoorOrigin#health_probes_enabled}.

---

##### `httpPort`<sup>Optional</sup> <a name="httpPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpPort"></a>

```java
public java.lang.Number getHttpPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#http_port CdnFrontdoorOrigin#http_port}.

---

##### `httpsPort`<sup>Optional</sup> <a name="httpsPort" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.httpsPort"></a>

```java
public java.lang.Number getHttpsPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#https_port CdnFrontdoorOrigin#https_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#id CdnFrontdoorOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `originHostHeader`<sup>Optional</sup> <a name="originHostHeader" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.originHostHeader"></a>

```java
public java.lang.String getOriginHostHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#origin_host_header CdnFrontdoorOrigin#origin_host_header}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#priority CdnFrontdoorOrigin#priority}.

---

##### `privateLink`<sup>Optional</sup> <a name="privateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.privateLink"></a>

```java
public CdnFrontdoorOriginPrivateLink getPrivateLink();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#private_link CdnFrontdoorOrigin#private_link}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.timeouts"></a>

```java
public CdnFrontdoorOriginTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#timeouts CdnFrontdoorOrigin#timeouts}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginConfig.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#weight CdnFrontdoorOrigin#weight}.

---

### CdnFrontdoorOriginPrivateLink <a name="CdnFrontdoorOriginPrivateLink" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOriginPrivateLink;

CdnFrontdoorOriginPrivateLink.builder()
    .location(java.lang.String)
    .privateLinkTargetId(java.lang.String)
//  .requestMessage(java.lang.String)
//  .targetType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#location CdnFrontdoorOrigin#location}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.privateLinkTargetId">privateLinkTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#private_link_target_id CdnFrontdoorOrigin#private_link_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#request_message CdnFrontdoorOrigin#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.targetType">targetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#target_type CdnFrontdoorOrigin#target_type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#location CdnFrontdoorOrigin#location}.

---

##### `privateLinkTargetId`<sup>Required</sup> <a name="privateLinkTargetId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.privateLinkTargetId"></a>

```java
public java.lang.String getPrivateLinkTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#private_link_target_id CdnFrontdoorOrigin#private_link_target_id}.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#request_message CdnFrontdoorOrigin#request_message}.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#target_type CdnFrontdoorOrigin#target_type}.

---

### CdnFrontdoorOriginTimeouts <a name="CdnFrontdoorOriginTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOriginTimeouts;

CdnFrontdoorOriginTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#create CdnFrontdoorOrigin#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#delete CdnFrontdoorOrigin#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#read CdnFrontdoorOrigin#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#update CdnFrontdoorOrigin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#create CdnFrontdoorOrigin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#delete CdnFrontdoorOrigin#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#read CdnFrontdoorOrigin#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cdn_frontdoor_origin#update CdnFrontdoorOrigin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorOriginPrivateLinkOutputReference <a name="CdnFrontdoorOriginPrivateLinkOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOriginPrivateLinkOutputReference;

new CdnFrontdoorOriginPrivateLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetTargetType">resetTargetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetRequestMessage"></a>

```java
public void resetRequestMessage()
```

##### `resetTargetType` <a name="resetTargetType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.resetTargetType"></a>

```java
public void resetTargetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetIdInput">privateLinkTargetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessageInput">requestMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetId">privateLinkTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessage">requestMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `privateLinkTargetIdInput`<sup>Optional</sup> <a name="privateLinkTargetIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetIdInput"></a>

```java
public java.lang.String getPrivateLinkTargetIdInput();
```

- *Type:* java.lang.String

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessageInput"></a>

```java
public java.lang.String getRequestMessageInput();
```

- *Type:* java.lang.String

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `privateLinkTargetId`<sup>Required</sup> <a name="privateLinkTargetId" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.privateLinkTargetId"></a>

```java
public java.lang.String getPrivateLinkTargetId();
```

- *Type:* java.lang.String

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.requestMessage"></a>

```java
public java.lang.String getRequestMessage();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLinkOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorOriginPrivateLink getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginPrivateLink">CdnFrontdoorOriginPrivateLink</a>

---


### CdnFrontdoorOriginTimeoutsOutputReference <a name="CdnFrontdoorOriginTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_origin.CdnFrontdoorOriginTimeoutsOutputReference;

new CdnFrontdoorOriginTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorOrigin.CdnFrontdoorOriginTimeouts">CdnFrontdoorOriginTimeouts</a>

---



