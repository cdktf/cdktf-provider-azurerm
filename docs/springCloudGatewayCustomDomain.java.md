# `azurerm_spring_cloud_gateway_custom_domain`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_gateway_custom_domain`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain).

# `springCloudGatewayCustomDomain` Submodule <a name="`springCloudGatewayCustomDomain` Submodule" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudGatewayCustomDomain <a name="SpringCloudGatewayCustomDomain" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain azurerm_spring_cloud_gateway_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway_custom_domain.SpringCloudGatewayCustomDomain;

SpringCloudGatewayCustomDomain.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .springCloudGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .thumbprint(java.lang.String)
//  .timeouts(SpringCloudGatewayCustomDomainTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#name SpringCloudGatewayCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.springCloudGatewayId">springCloudGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#spring_cloud_gateway_id SpringCloudGatewayCustomDomain#spring_cloud_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#id SpringCloudGatewayCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#thumbprint SpringCloudGatewayCustomDomain#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#name SpringCloudGatewayCustomDomain#name}.

---

##### `springCloudGatewayId`<sup>Required</sup> <a name="springCloudGatewayId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.springCloudGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#spring_cloud_gateway_id SpringCloudGatewayCustomDomain#spring_cloud_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#id SpringCloudGatewayCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.thumbprint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#thumbprint SpringCloudGatewayCustomDomain#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#timeouts SpringCloudGatewayCustomDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetThumbprint">resetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudGatewayCustomDomainTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetId"></a>

```java
public void resetId()
```

##### `resetThumbprint` <a name="resetThumbprint" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetThumbprint"></a>

```java
public void resetThumbprint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway_custom_domain.SpringCloudGatewayCustomDomain;

SpringCloudGatewayCustomDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway_custom_domain.SpringCloudGatewayCustomDomain;

SpringCloudGatewayCustomDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway_custom_domain.SpringCloudGatewayCustomDomain;

SpringCloudGatewayCustomDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference">SpringCloudGatewayCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayIdInput">springCloudGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprintInput">thumbprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayId">springCloudGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeouts"></a>

```java
public SpringCloudGatewayCustomDomainTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference">SpringCloudGatewayCustomDomainTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `springCloudGatewayIdInput`<sup>Optional</sup> <a name="springCloudGatewayIdInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayIdInput"></a>

```java
public java.lang.String getSpringCloudGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `thumbprintInput`<sup>Optional</sup> <a name="thumbprintInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprintInput"></a>

```java
public java.lang.String getThumbprintInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `springCloudGatewayId`<sup>Required</sup> <a name="springCloudGatewayId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.springCloudGatewayId"></a>

```java
public java.lang.String getSpringCloudGatewayId();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudGatewayCustomDomainConfig <a name="SpringCloudGatewayCustomDomainConfig" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway_custom_domain.SpringCloudGatewayCustomDomainConfig;

SpringCloudGatewayCustomDomainConfig.builder()
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
    .name(java.lang.String)
    .springCloudGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .thumbprint(java.lang.String)
//  .timeouts(SpringCloudGatewayCustomDomainTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#name SpringCloudGatewayCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.springCloudGatewayId">springCloudGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#spring_cloud_gateway_id SpringCloudGatewayCustomDomain#spring_cloud_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#id SpringCloudGatewayCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#thumbprint SpringCloudGatewayCustomDomain#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#name SpringCloudGatewayCustomDomain#name}.

---

##### `springCloudGatewayId`<sup>Required</sup> <a name="springCloudGatewayId" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.springCloudGatewayId"></a>

```java
public java.lang.String getSpringCloudGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#spring_cloud_gateway_id SpringCloudGatewayCustomDomain#spring_cloud_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#id SpringCloudGatewayCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `thumbprint`<sup>Optional</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#thumbprint SpringCloudGatewayCustomDomain#thumbprint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainConfig.property.timeouts"></a>

```java
public SpringCloudGatewayCustomDomainTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#timeouts SpringCloudGatewayCustomDomain#timeouts}

---

### SpringCloudGatewayCustomDomainTimeouts <a name="SpringCloudGatewayCustomDomainTimeouts" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway_custom_domain.SpringCloudGatewayCustomDomainTimeouts;

SpringCloudGatewayCustomDomainTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#create SpringCloudGatewayCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#delete SpringCloudGatewayCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#read SpringCloudGatewayCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#update SpringCloudGatewayCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#create SpringCloudGatewayCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#delete SpringCloudGatewayCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#read SpringCloudGatewayCustomDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/spring_cloud_gateway_custom_domain#update SpringCloudGatewayCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudGatewayCustomDomainTimeoutsOutputReference <a name="SpringCloudGatewayCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.spring_cloud_gateway_custom_domain.SpringCloudGatewayCustomDomainTimeoutsOutputReference;

new SpringCloudGatewayCustomDomainTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudGatewayCustomDomain.SpringCloudGatewayCustomDomainTimeouts">SpringCloudGatewayCustomDomainTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



