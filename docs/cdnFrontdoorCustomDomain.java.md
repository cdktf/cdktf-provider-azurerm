# `azurerm_cdn_frontdoor_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain).

# `cdnFrontdoorCustomDomain` Submodule <a name="`cdnFrontdoorCustomDomain` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorCustomDomain <a name="CdnFrontdoorCustomDomain" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.Builder.create(Construct scope, java.lang.String id)
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
    .cdnFrontdoorProfileId(java.lang.String)
    .hostName(java.lang.String)
    .name(java.lang.String)
    .tls(CdnFrontdoorCustomDomainTls)
//  .dnsZoneId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorCustomDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | tls block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dnsZoneId">dnsZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.hostName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}.

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.tls"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#tls CdnFrontdoorCustomDomain#tls}

---

##### `dnsZoneId`<sup>Optional</sup> <a name="dnsZoneId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.dnsZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#timeouts CdnFrontdoorCustomDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId">resetDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorCustomDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls"></a>

```java
public void putTls(CdnFrontdoorCustomDomainTls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `resetDnsZoneId` <a name="resetDnsZoneId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId"></a>

```java
public void resetDnsZoneId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomain;

CdnFrontdoorCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorCustomDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnFrontdoorCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken">validationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput">dnsZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput">hostNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput">tlsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId">dnsZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName">hostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts"></a>

```java
public CdnFrontdoorCustomDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls"></a>

```java
public CdnFrontdoorCustomDomainTlsOutputReference getTls();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a>

---

##### `validationToken`<sup>Required</sup> <a name="validationToken" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken"></a>

```java
public java.lang.String getValidationToken();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput"></a>

```java
public java.lang.String getCdnFrontdoorProfileIdInput();
```

- *Type:* java.lang.String

---

##### `dnsZoneIdInput`<sup>Optional</sup> <a name="dnsZoneIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput"></a>

```java
public java.lang.String getDnsZoneIdInput();
```

- *Type:* java.lang.String

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput"></a>

```java
public java.lang.String getHostNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput"></a>

```java
public CdnFrontdoorCustomDomainTls getTlsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `dnsZoneId`<sup>Required</sup> <a name="dnsZoneId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId"></a>

```java
public java.lang.String getDnsZoneId();
```

- *Type:* java.lang.String

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorCustomDomainConfig <a name="CdnFrontdoorCustomDomainConfig" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainConfig;

CdnFrontdoorCustomDomainConfig.builder()
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
    .cdnFrontdoorProfileId(java.lang.String)
    .hostName(java.lang.String)
    .name(java.lang.String)
    .tls(CdnFrontdoorCustomDomainTls)
//  .dnsZoneId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorCustomDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName">hostName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | tls block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId">dnsZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName"></a>

```java
public java.lang.String getHostName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}.

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls"></a>

```java
public CdnFrontdoorCustomDomainTls getTls();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#tls CdnFrontdoorCustomDomain#tls}

---

##### `dnsZoneId`<sup>Optional</sup> <a name="dnsZoneId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId"></a>

```java
public java.lang.String getDnsZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts"></a>

```java
public CdnFrontdoorCustomDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#timeouts CdnFrontdoorCustomDomain#timeouts}

---

### CdnFrontdoorCustomDomainTimeouts <a name="CdnFrontdoorCustomDomainTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTimeouts;

CdnFrontdoorCustomDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}.

---

### CdnFrontdoorCustomDomainTls <a name="CdnFrontdoorCustomDomainTls" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTls;

CdnFrontdoorCustomDomainTls.builder()
//  .cdnFrontdoorSecretId(java.lang.String)
//  .certificateType(java.lang.String)
//  .minimumTlsVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId">cdnFrontdoorSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#minimum_tls_version CdnFrontdoorCustomDomain#minimum_tls_version}. |

---

##### `cdnFrontdoorSecretId`<sup>Optional</sup> <a name="cdnFrontdoorSecretId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId"></a>

```java
public java.lang.String getCdnFrontdoorSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}.

---

##### `certificateType`<sup>Optional</sup> <a name="certificateType" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}.

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/cdn_frontdoor_custom_domain#minimum_tls_version CdnFrontdoorCustomDomain#minimum_tls_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorCustomDomainTimeoutsOutputReference <a name="CdnFrontdoorCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTimeoutsOutputReference;

new CdnFrontdoorCustomDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---


### CdnFrontdoorCustomDomainTlsOutputReference <a name="CdnFrontdoorCustomDomainTlsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_custom_domain.CdnFrontdoorCustomDomainTlsOutputReference;

new CdnFrontdoorCustomDomainTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId">resetCdnFrontdoorSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType">resetCertificateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCdnFrontdoorSecretId` <a name="resetCdnFrontdoorSecretId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId"></a>

```java
public void resetCdnFrontdoorSecretId()
```

##### `resetCertificateType` <a name="resetCertificateType" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType"></a>

```java
public void resetCertificateType()
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumTlsVersion"></a>

```java
public void resetMinimumTlsVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput">cdnFrontdoorSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput">certificateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId">cdnFrontdoorSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType">certificateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorSecretIdInput`<sup>Optional</sup> <a name="cdnFrontdoorSecretIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput"></a>

```java
public java.lang.String getCdnFrontdoorSecretIdInput();
```

- *Type:* java.lang.String

---

##### `certificateTypeInput`<sup>Optional</sup> <a name="certificateTypeInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput"></a>

```java
public java.lang.String getCertificateTypeInput();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersionInput"></a>

```java
public java.lang.String getMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorSecretId`<sup>Required</sup> <a name="cdnFrontdoorSecretId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId"></a>

```java
public java.lang.String getCdnFrontdoorSecretId();
```

- *Type:* java.lang.String

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType"></a>

```java
public java.lang.String getCertificateType();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorCustomDomainTls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---



