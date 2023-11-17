# `azurerm_cdn_frontdoor_route_disable_link_to_default_domain`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_route_disable_link_to_default_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain).

# `cdnFrontdoorRouteDisableLinkToDefaultDomain` Submodule <a name="`cdnFrontdoorRouteDisableLinkToDefaultDomain` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomain <a name="CdnFrontdoorRouteDisableLinkToDefaultDomain" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain azurerm_cdn_frontdoor_route_disable_link_to_default_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomain;

CdnFrontdoorRouteDisableLinkToDefaultDomain.Builder.create(Construct scope, java.lang.String id)
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
    .cdnFrontdoorCustomDomainIds(java.util.List<java.lang.String>)
    .cdnFrontdoorRouteId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorCustomDomainIds">cdnFrontdoorCustomDomainIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorRouteId">cdnFrontdoorRouteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="cdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorCustomDomainIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}.

---

##### `cdnFrontdoorRouteId`<sup>Required</sup> <a name="cdnFrontdoorRouteId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.cdnFrontdoorRouteId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#timeouts CdnFrontdoorRouteDisableLinkToDefaultDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorRouteDisableLinkToDefaultDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomain;

CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomain;

CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomain;

CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomain;

CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnFrontdoorRouteDisableLinkToDefaultDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorRouteDisableLinkToDefaultDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorRouteDisableLinkToDefaultDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRouteDisableLinkToDefaultDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIdsInput">cdnFrontdoorCustomDomainIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteIdInput">cdnFrontdoorRouteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIds">cdnFrontdoorCustomDomainIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteId">cdnFrontdoorRouteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeouts"></a>

```java
public CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference</a>

---

##### `cdnFrontdoorCustomDomainIdsInput`<sup>Optional</sup> <a name="cdnFrontdoorCustomDomainIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIdsInput"></a>

```java
public java.util.List<java.lang.String> getCdnFrontdoorCustomDomainIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cdnFrontdoorRouteIdInput`<sup>Optional</sup> <a name="cdnFrontdoorRouteIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteIdInput"></a>

```java
public java.lang.String getCdnFrontdoorRouteIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

---

##### `cdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="cdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorCustomDomainIds"></a>

```java
public java.util.List<java.lang.String> getCdnFrontdoorCustomDomainIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cdnFrontdoorRouteId`<sup>Required</sup> <a name="cdnFrontdoorRouteId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.cdnFrontdoorRouteId"></a>

```java
public java.lang.String getCdnFrontdoorRouteId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomainConfig <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainConfig" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig;

CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.builder()
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
    .cdnFrontdoorCustomDomainIds(java.util.List<java.lang.String>)
    .cdnFrontdoorRouteId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorCustomDomainIds">cdnFrontdoorCustomDomainIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorRouteId">cdnFrontdoorRouteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="cdnFrontdoorCustomDomainIds" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorCustomDomainIds"></a>

```java
public java.util.List<java.lang.String> getCdnFrontdoorCustomDomainIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_custom_domain_ids CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_custom_domain_ids}.

---

##### `cdnFrontdoorRouteId`<sup>Required</sup> <a name="cdnFrontdoorRouteId" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.cdnFrontdoorRouteId"></a>

```java
public java.lang.String getCdnFrontdoorRouteId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#cdn_frontdoor_route_id CdnFrontdoorRouteDisableLinkToDefaultDomain#cdn_frontdoor_route_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#id CdnFrontdoorRouteDisableLinkToDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainConfig.property.timeouts"></a>

```java
public CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#timeouts CdnFrontdoorRouteDisableLinkToDefaultDomain#timeouts}

---

### CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts;

CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#create CdnFrontdoorRouteDisableLinkToDefaultDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#delete CdnFrontdoorRouteDisableLinkToDefaultDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#read CdnFrontdoorRouteDisableLinkToDefaultDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#update CdnFrontdoorRouteDisableLinkToDefaultDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#create CdnFrontdoorRouteDisableLinkToDefaultDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#delete CdnFrontdoorRouteDisableLinkToDefaultDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#read CdnFrontdoorRouteDisableLinkToDefaultDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.81.0/docs/resources/cdn_frontdoor_route_disable_link_to_default_domain#update CdnFrontdoorRouteDisableLinkToDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference <a name="CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_route_disable_link_to_default_domain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference;

new CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorRouteDisableLinkToDefaultDomain.CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts">CdnFrontdoorRouteDisableLinkToDefaultDomainTimeouts</a>

---



