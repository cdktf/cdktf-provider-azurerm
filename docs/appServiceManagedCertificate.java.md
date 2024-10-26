# `appServiceManagedCertificate` Submodule <a name="`appServiceManagedCertificate` Submodule" id="@cdktf/provider-azurerm.appServiceManagedCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceManagedCertificate <a name="AppServiceManagedCertificate" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate azurerm_app_service_managed_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificate;

AppServiceManagedCertificate.Builder.create(Construct scope, java.lang.String id)
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
    .customHostnameBindingId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppServiceManagedCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.customHostnameBindingId">customHostnameBindingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#custom_hostname_binding_id AppServiceManagedCertificate#custom_hostname_binding_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#id AppServiceManagedCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#tags AppServiceManagedCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHostnameBindingId`<sup>Required</sup> <a name="customHostnameBindingId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.customHostnameBindingId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#custom_hostname_binding_id AppServiceManagedCertificate#custom_hostname_binding_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#id AppServiceManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#tags AppServiceManagedCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#timeouts AppServiceManagedCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.putTimeouts"></a>

```java
public void putTimeouts(AppServiceManagedCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceManagedCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificate;

AppServiceManagedCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificate;

AppServiceManagedCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificate;

AppServiceManagedCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificate;

AppServiceManagedCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppServiceManagedCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppServiceManagedCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppServiceManagedCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppServiceManagedCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceManagedCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.canonicalName">canonicalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyName">friendlyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.hostNames">hostNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issueDate">issueDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.subjectName">subjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference">AppServiceManagedCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingIdInput">customHostnameBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingId">customHostnameBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `canonicalName`<sup>Required</sup> <a name="canonicalName" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.canonicalName"></a>

```java
public java.lang.String getCanonicalName();
```

- *Type:* java.lang.String

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.friendlyName"></a>

```java
public java.lang.String getFriendlyName();
```

- *Type:* java.lang.String

---

##### `hostNames`<sup>Required</sup> <a name="hostNames" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.hostNames"></a>

```java
public java.util.List<java.lang.String> getHostNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issueDate`<sup>Required</sup> <a name="issueDate" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issueDate"></a>

```java
public java.lang.String getIssueDate();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.subjectName"></a>

```java
public java.lang.String getSubjectName();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeouts"></a>

```java
public AppServiceManagedCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference">AppServiceManagedCertificateTimeoutsOutputReference</a>

---

##### `customHostnameBindingIdInput`<sup>Optional</sup> <a name="customHostnameBindingIdInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingIdInput"></a>

```java
public java.lang.String getCustomHostnameBindingIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

---

##### `customHostnameBindingId`<sup>Required</sup> <a name="customHostnameBindingId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.customHostnameBindingId"></a>

```java
public java.lang.String getCustomHostnameBindingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceManagedCertificateConfig <a name="AppServiceManagedCertificateConfig" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificateConfig;

AppServiceManagedCertificateConfig.builder()
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
    .customHostnameBindingId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AppServiceManagedCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.customHostnameBindingId">customHostnameBindingId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#custom_hostname_binding_id AppServiceManagedCertificate#custom_hostname_binding_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#id AppServiceManagedCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#tags AppServiceManagedCertificate#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHostnameBindingId`<sup>Required</sup> <a name="customHostnameBindingId" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.customHostnameBindingId"></a>

```java
public java.lang.String getCustomHostnameBindingId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#custom_hostname_binding_id AppServiceManagedCertificate#custom_hostname_binding_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#id AppServiceManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#tags AppServiceManagedCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateConfig.property.timeouts"></a>

```java
public AppServiceManagedCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#timeouts AppServiceManagedCertificate#timeouts}

---

### AppServiceManagedCertificateTimeouts <a name="AppServiceManagedCertificateTimeouts" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificateTimeouts;

AppServiceManagedCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#create AppServiceManagedCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#delete AppServiceManagedCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#read AppServiceManagedCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#update AppServiceManagedCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#create AppServiceManagedCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#delete AppServiceManagedCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#read AppServiceManagedCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/app_service_managed_certificate#update AppServiceManagedCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceManagedCertificateTimeoutsOutputReference <a name="AppServiceManagedCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.app_service_managed_certificate.AppServiceManagedCertificateTimeoutsOutputReference;

new AppServiceManagedCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.appServiceManagedCertificate.AppServiceManagedCertificateTimeouts">AppServiceManagedCertificateTimeouts</a>

---



