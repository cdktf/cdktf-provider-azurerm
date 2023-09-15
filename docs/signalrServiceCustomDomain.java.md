# `azurerm_signalr_service_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_signalr_service_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain).

# `signalrServiceCustomDomain` Submodule <a name="`signalrServiceCustomDomain` Submodule" id="@cdktf/provider-azurerm.signalrServiceCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrServiceCustomDomain <a name="SignalrServiceCustomDomain" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain azurerm_signalr_service_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service_custom_domain.SignalrServiceCustomDomain;

SignalrServiceCustomDomain.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
    .name(java.lang.String)
    .signalrCustomCertificateId(java.lang.String)
    .signalrServiceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SignalrServiceCustomDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrCustomCertificateId">signalrCustomCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrServiceId">signalrServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}.

---

##### `signalrCustomCertificateId`<sup>Required</sup> <a name="signalrCustomCertificateId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrCustomCertificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}.

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.signalrServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#timeouts SignalrServiceCustomDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts"></a>

```java
public void putTimeouts(SignalrServiceCustomDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service_custom_domain.SignalrServiceCustomDomain;

SignalrServiceCustomDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service_custom_domain.SignalrServiceCustomDomain;

SignalrServiceCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service_custom_domain.SignalrServiceCustomDomain;

SignalrServiceCustomDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference">SignalrServiceCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateIdInput">signalrCustomCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceIdInput">signalrServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateId">signalrCustomCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceId">signalrServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeouts"></a>

```java
public SignalrServiceCustomDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference">SignalrServiceCustomDomainTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `signalrCustomCertificateIdInput`<sup>Optional</sup> <a name="signalrCustomCertificateIdInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateIdInput"></a>

```java
public java.lang.String getSignalrCustomCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `signalrServiceIdInput`<sup>Optional</sup> <a name="signalrServiceIdInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceIdInput"></a>

```java
public java.lang.String getSignalrServiceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signalrCustomCertificateId`<sup>Required</sup> <a name="signalrCustomCertificateId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrCustomCertificateId"></a>

```java
public java.lang.String getSignalrCustomCertificateId();
```

- *Type:* java.lang.String

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.signalrServiceId"></a>

```java
public java.lang.String getSignalrServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrServiceCustomDomainConfig <a name="SignalrServiceCustomDomainConfig" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service_custom_domain.SignalrServiceCustomDomainConfig;

SignalrServiceCustomDomainConfig.builder()
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
    .domainName(java.lang.String)
    .name(java.lang.String)
    .signalrCustomCertificateId(java.lang.String)
    .signalrServiceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SignalrServiceCustomDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrCustomCertificateId">signalrCustomCertificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrServiceId">signalrServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#domain_name SignalrServiceCustomDomain#domain_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#name SignalrServiceCustomDomain#name}.

---

##### `signalrCustomCertificateId`<sup>Required</sup> <a name="signalrCustomCertificateId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrCustomCertificateId"></a>

```java
public java.lang.String getSignalrCustomCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_custom_certificate_id SignalrServiceCustomDomain#signalr_custom_certificate_id}.

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.signalrServiceId"></a>

```java
public java.lang.String getSignalrServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#signalr_service_id SignalrServiceCustomDomain#signalr_service_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#id SignalrServiceCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainConfig.property.timeouts"></a>

```java
public SignalrServiceCustomDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#timeouts SignalrServiceCustomDomain#timeouts}

---

### SignalrServiceCustomDomainTimeouts <a name="SignalrServiceCustomDomainTimeouts" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service_custom_domain.SignalrServiceCustomDomainTimeouts;

SignalrServiceCustomDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#create SignalrServiceCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#delete SignalrServiceCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#read SignalrServiceCustomDomain#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#create SignalrServiceCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#delete SignalrServiceCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/signalr_service_custom_domain#read SignalrServiceCustomDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrServiceCustomDomainTimeoutsOutputReference <a name="SignalrServiceCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.signalr_service_custom_domain.SignalrServiceCustomDomainTimeoutsOutputReference;

new SignalrServiceCustomDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.signalrServiceCustomDomain.SignalrServiceCustomDomainTimeouts">SignalrServiceCustomDomainTimeouts</a>

---



