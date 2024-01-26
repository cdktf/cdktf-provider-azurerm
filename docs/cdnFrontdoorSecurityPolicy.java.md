# `cdnFrontdoorSecurityPolicy` Submodule <a name="`cdnFrontdoorSecurityPolicy` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorSecurityPolicy <a name="CdnFrontdoorSecurityPolicy" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy azurerm_cdn_frontdoor_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicy;

CdnFrontdoorSecurityPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .securityPolicies(CdnFrontdoorSecurityPolicySecurityPolicies)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorSecurityPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.securityPolicies">securityPolicies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | security_policies block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}.

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.securityPolicies"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

security_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#security_policies CdnFrontdoorSecurityPolicy#security_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#timeouts CdnFrontdoorSecurityPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies">putSecurityPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecurityPolicies` <a name="putSecurityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies"></a>

```java
public void putSecurityPolicies(CdnFrontdoorSecurityPolicySecurityPolicies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putSecurityPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorSecurityPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicy;

CdnFrontdoorSecurityPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicy;

CdnFrontdoorSecurityPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicy;

CdnFrontdoorSecurityPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicy;

CdnFrontdoorSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorSecurityPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnFrontdoorSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPolicies">securityPolicies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference">CdnFrontdoorSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPoliciesInput">securityPoliciesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPolicies"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference getSecurityPolicies();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeouts"></a>

```java
public CdnFrontdoorSecurityPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference">CdnFrontdoorSecurityPolicyTimeoutsOutputReference</a>

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileIdInput"></a>

```java
public java.lang.String getCdnFrontdoorProfileIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `securityPoliciesInput`<sup>Optional</sup> <a name="securityPoliciesInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.securityPoliciesInput"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPolicies getSecurityPoliciesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorSecurityPolicyConfig <a name="CdnFrontdoorSecurityPolicyConfig" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicyConfig;

CdnFrontdoorSecurityPolicyConfig.builder()
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
    .name(java.lang.String)
    .securityPolicies(CdnFrontdoorSecurityPolicySecurityPolicies)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorSecurityPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.securityPolicies">securityPolicies</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | security_policies block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}.

---

##### `securityPolicies`<sup>Required</sup> <a name="securityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.securityPolicies"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPolicies getSecurityPolicies();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

security_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#security_policies CdnFrontdoorSecurityPolicy#security_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyConfig.property.timeouts"></a>

```java
public CdnFrontdoorSecurityPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#timeouts CdnFrontdoorSecurityPolicy#timeouts}

---

### CdnFrontdoorSecurityPolicySecurityPolicies <a name="CdnFrontdoorSecurityPolicySecurityPolicies" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPolicies;

CdnFrontdoorSecurityPolicySecurityPolicies.builder()
    .firewall(CdnFrontdoorSecurityPolicySecurityPoliciesFirewall)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | firewall block. |

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies.property.firewall"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewall getFirewall();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#firewall CdnFrontdoorSecurityPolicy#firewall}

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewall <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall;

CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.builder()
    .association(CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation)
    .cdnFrontdoorFirewallPolicyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.association">association</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | association block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.cdnFrontdoorFirewallPolicyId">cdnFrontdoorFirewallPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}. |

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.association"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation getAssociation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#association CdnFrontdoorSecurityPolicy#association}

---

##### `cdnFrontdoorFirewallPolicyId`<sup>Required</sup> <a name="cdnFrontdoorFirewallPolicyId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall.property.cdnFrontdoorFirewallPolicyId"></a>

```java
public java.lang.String getCdnFrontdoorFirewallPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}.

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation;

CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.builder()
    .domain(IResolvable)
    .domain(java.util.List<CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain>)
    .patternsToMatch(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.domain">domain</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>></code> | domain block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.patternsToMatch">patternsToMatch</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.domain"></a>

```java
public java.lang.Object getDomain();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>>

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#domain CdnFrontdoorSecurityPolicy#domain}

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.property.patternsToMatch"></a>

```java
public java.util.List<java.lang.String> getPatternsToMatch();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}.

---

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain;

CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.builder()
    .cdnFrontdoorDomainId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.property.cdnFrontdoorDomainId">cdnFrontdoorDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_domain_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_domain_id}. |

---

##### `cdnFrontdoorDomainId`<sup>Required</sup> <a name="cdnFrontdoorDomainId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.property.cdnFrontdoorDomainId"></a>

```java
public java.lang.String getCdnFrontdoorDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_domain_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_domain_id}.

---

### CdnFrontdoorSecurityPolicyTimeouts <a name="CdnFrontdoorSecurityPolicyTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicyTimeouts;

CdnFrontdoorSecurityPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList;

new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference;

new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainIdInput">cdnFrontdoorDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId">cdnFrontdoorDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `cdnFrontdoorDomainIdInput`<sup>Optional</sup> <a name="cdnFrontdoorDomainIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainIdInput"></a>

```java
public java.lang.String getCdnFrontdoorDomainIdInput();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorDomainId`<sup>Required</sup> <a name="cdnFrontdoorDomainId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId"></a>

```java
public java.lang.String getCdnFrontdoorDomainId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference;

new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain">putDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDomain` <a name="putDomain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain"></a>

```java
public void putDomain(IResolvable OR java.util.List<CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.putDomain.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain">domain</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domainInput">domainInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatchInput">patternsToMatchInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch">patternsToMatch</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList getDomain();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domainInput"></a>

```java
public java.lang.Object getDomainInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>>

---

##### `patternsToMatchInput`<sup>Optional</sup> <a name="patternsToMatchInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatchInput"></a>

```java
public java.util.List<java.lang.String> getPatternsToMatchInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `patternsToMatch`<sup>Required</sup> <a name="patternsToMatch" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch"></a>

```java
public java.util.List<java.lang.String> getPatternsToMatch();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference;

new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation">putAssociation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssociation` <a name="putAssociation" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation"></a>

```java
public void putAssociation(CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.putAssociation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association">association</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.associationInput">associationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyIdInput">cdnFrontdoorFirewallPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId">cdnFrontdoorFirewallPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference getAssociation();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference</a>

---

##### `associationInput`<sup>Optional</sup> <a name="associationInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.associationInput"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation getAssociationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---

##### `cdnFrontdoorFirewallPolicyIdInput`<sup>Optional</sup> <a name="cdnFrontdoorFirewallPolicyIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyIdInput"></a>

```java
public java.lang.String getCdnFrontdoorFirewallPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `cdnFrontdoorFirewallPolicyId`<sup>Required</sup> <a name="cdnFrontdoorFirewallPolicyId" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId"></a>

```java
public java.lang.String getCdnFrontdoorFirewallPolicyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewall getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---


### CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference <a name="CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference;

new CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall">putFirewall</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall"></a>

```java
public void putFirewall(CdnFrontdoorSecurityPolicySecurityPoliciesFirewall value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewallInput">firewallInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference getFirewall();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference">CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference</a>

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewallInput"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPoliciesFirewall getFirewallInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesFirewall">CdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorSecurityPolicySecurityPolicies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicySecurityPolicies">CdnFrontdoorSecurityPolicySecurityPolicies</a>

---


### CdnFrontdoorSecurityPolicyTimeoutsOutputReference <a name="CdnFrontdoorSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_security_policy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference;

new CdnFrontdoorSecurityPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecurityPolicy.CdnFrontdoorSecurityPolicyTimeouts">CdnFrontdoorSecurityPolicyTimeouts</a>

---



