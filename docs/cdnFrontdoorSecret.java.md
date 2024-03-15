# `cdnFrontdoorSecret` Submodule <a name="`cdnFrontdoorSecret` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorSecret <a name="CdnFrontdoorSecret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret azurerm_cdn_frontdoor_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecret;

CdnFrontdoorSecret.Builder.create(Construct scope, java.lang.String id)
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
    .secret(CdnFrontdoorSecretSecret)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorSecretTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.cdnFrontdoorProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.secret"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#secret CdnFrontdoorSecret#secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#timeouts CdnFrontdoorSecret#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putSecret"></a>

```java
public void putSecret(CdnFrontdoorSecretSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts"></a>

```java
public void putTimeouts(CdnFrontdoorSecretTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnFrontdoorSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecret;

CdnFrontdoorSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecret;

CdnFrontdoorSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecret;

CdnFrontdoorSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecret;

CdnFrontdoorSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CdnFrontdoorSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CdnFrontdoorSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CdnFrontdoorSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CdnFrontdoorSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileName">cdnFrontdoorProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference">CdnFrontdoorSecretSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference">CdnFrontdoorSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileIdInput">cdnFrontdoorProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secretInput">secretInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileName`<sup>Required</sup> <a name="cdnFrontdoorProfileName" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileName"></a>

```java
public java.lang.String getCdnFrontdoorProfileName();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secret"></a>

```java
public CdnFrontdoorSecretSecretOutputReference getSecret();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference">CdnFrontdoorSecretSecretOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeouts"></a>

```java
public CdnFrontdoorSecretTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference">CdnFrontdoorSecretTimeoutsOutputReference</a>

---

##### `cdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="cdnFrontdoorProfileIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileIdInput"></a>

```java
public java.lang.String getCdnFrontdoorProfileIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.secretInput"></a>

```java
public CdnFrontdoorSecretSecret getSecretInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorSecretConfig <a name="CdnFrontdoorSecretConfig" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretConfig;

CdnFrontdoorSecretConfig.builder()
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
    .secret(CdnFrontdoorSecretSecret)
//  .id(java.lang.String)
//  .timeouts(CdnFrontdoorSecretTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.cdnFrontdoorProfileId"></a>

```java
public java.lang.String getCdnFrontdoorProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#cdn_frontdoor_profile_id CdnFrontdoorSecret#cdn_frontdoor_profile_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#name CdnFrontdoorSecret#name}.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.secret"></a>

```java
public CdnFrontdoorSecretSecret getSecret();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#secret CdnFrontdoorSecret#secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#id CdnFrontdoorSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretConfig.property.timeouts"></a>

```java
public CdnFrontdoorSecretTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#timeouts CdnFrontdoorSecret#timeouts}

---

### CdnFrontdoorSecretSecret <a name="CdnFrontdoorSecretSecret" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretSecret;

CdnFrontdoorSecretSecret.builder()
    .customerCertificate(IResolvable)
    .customerCertificate(java.util.List<CdnFrontdoorSecretSecretCustomerCertificate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret.property.customerCertificate">customerCertificate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>></code> | customer_certificate block. |

---

##### `customerCertificate`<sup>Required</sup> <a name="customerCertificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret.property.customerCertificate"></a>

```java
public java.lang.Object getCustomerCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>>

customer_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#customer_certificate CdnFrontdoorSecret#customer_certificate}

---

### CdnFrontdoorSecretSecretCustomerCertificate <a name="CdnFrontdoorSecretSecretCustomerCertificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretSecretCustomerCertificate;

CdnFrontdoorSecretSecretCustomerCertificate.builder()
    .keyVaultCertificateId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate.property.keyVaultCertificateId">keyVaultCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#key_vault_certificate_id CdnFrontdoorSecret#key_vault_certificate_id}. |

---

##### `keyVaultCertificateId`<sup>Required</sup> <a name="keyVaultCertificateId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate.property.keyVaultCertificateId"></a>

```java
public java.lang.String getKeyVaultCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#key_vault_certificate_id CdnFrontdoorSecret#key_vault_certificate_id}.

---

### CdnFrontdoorSecretTimeouts <a name="CdnFrontdoorSecretTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretTimeouts;

CdnFrontdoorSecretTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#create CdnFrontdoorSecret#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#delete CdnFrontdoorSecret#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#read CdnFrontdoorSecret#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#create CdnFrontdoorSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#delete CdnFrontdoorSecret#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/cdn_frontdoor_secret#read CdnFrontdoorSecret#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorSecretSecretCustomerCertificateList <a name="CdnFrontdoorSecretSecretCustomerCertificateList" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretSecretCustomerCertificateList;

new CdnFrontdoorSecretSecretCustomerCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.get"></a>

```java
public CdnFrontdoorSecretSecretCustomerCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>>

---


### CdnFrontdoorSecretSecretCustomerCertificateOutputReference <a name="CdnFrontdoorSecretSecretCustomerCertificateOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference;

new CdnFrontdoorSecretSecretCustomerCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateIdInput">keyVaultCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateId">keyVaultCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyVaultCertificateIdInput`<sup>Optional</sup> <a name="keyVaultCertificateIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateIdInput"></a>

```java
public java.lang.String getKeyVaultCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultCertificateId`<sup>Required</sup> <a name="keyVaultCertificateId" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.keyVaultCertificateId"></a>

```java
public java.lang.String getKeyVaultCertificateId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>

---


### CdnFrontdoorSecretSecretOutputReference <a name="CdnFrontdoorSecretSecretOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretSecretOutputReference;

new CdnFrontdoorSecretSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.putCustomerCertificate">putCustomerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerCertificate` <a name="putCustomerCertificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.putCustomerCertificate"></a>

```java
public void putCustomerCertificate(IResolvable OR java.util.List<CdnFrontdoorSecretSecretCustomerCertificate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.putCustomerCertificate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificate">customerCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList">CdnFrontdoorSecretSecretCustomerCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificateInput">customerCertificateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customerCertificate`<sup>Required</sup> <a name="customerCertificate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificate"></a>

```java
public CdnFrontdoorSecretSecretCustomerCertificateList getCustomerCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificateList">CdnFrontdoorSecretSecretCustomerCertificateList</a>

---

##### `customerCertificateInput`<sup>Optional</sup> <a name="customerCertificateInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.customerCertificateInput"></a>

```java
public java.lang.Object getCustomerCertificateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretCustomerCertificate">CdnFrontdoorSecretSecretCustomerCertificate</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecretOutputReference.property.internalValue"></a>

```java
public CdnFrontdoorSecretSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretSecret">CdnFrontdoorSecretSecret</a>

---


### CdnFrontdoorSecretTimeoutsOutputReference <a name="CdnFrontdoorSecretTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cdn_frontdoor_secret.CdnFrontdoorSecretTimeoutsOutputReference;

new CdnFrontdoorSecretTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cdnFrontdoorSecret.CdnFrontdoorSecretTimeouts">CdnFrontdoorSecretTimeouts</a>

---



