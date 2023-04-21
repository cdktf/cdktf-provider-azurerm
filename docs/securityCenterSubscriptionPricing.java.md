# `azurerm_security_center_subscription_pricing`

Refer to the Terraform Registory for docs: [`azurerm_security_center_subscription_pricing`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing).

# `securityCenterSubscriptionPricing` Submodule <a name="`securityCenterSubscriptionPricing` Submodule" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterSubscriptionPricing <a name="SecurityCenterSubscriptionPricing" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing azurerm_security_center_subscription_pricing}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_subscription_pricing.SecurityCenterSubscriptionPricing;

SecurityCenterSubscriptionPricing.Builder.create(Construct scope, java.lang.String id)
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
    .tier(java.lang.String)
//  .id(java.lang.String)
//  .resourceType(java.lang.String)
//  .subplan(java.lang.String)
//  .timeouts(SecurityCenterSubscriptionPricingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.subplan">subplan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}.

---

##### `subplan`<sup>Optional</sup> <a name="subplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.subplan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#timeouts SecurityCenterSubscriptionPricing#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetSubplan">resetSubplan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts"></a>

```java
public void putTimeouts(SecurityCenterSubscriptionPricingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetId"></a>

```java
public void resetId()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetSubplan` <a name="resetSubplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetSubplan"></a>

```java
public void resetSubplan()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_subscription_pricing.SecurityCenterSubscriptionPricing;

SecurityCenterSubscriptionPricing.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_subscription_pricing.SecurityCenterSubscriptionPricing;

SecurityCenterSubscriptionPricing.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_subscription_pricing.SecurityCenterSubscriptionPricing;

SecurityCenterSubscriptionPricing.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference">SecurityCenterSubscriptionPricingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplanInput">subplanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplan">subplan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeouts"></a>

```java
public SecurityCenterSubscriptionPricingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference">SecurityCenterSubscriptionPricingTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `subplanInput`<sup>Optional</sup> <a name="subplanInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplanInput"></a>

```java
public java.lang.String getSubplanInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `subplan`<sup>Required</sup> <a name="subplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.subplan"></a>

```java
public java.lang.String getSubplan();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricing.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterSubscriptionPricingConfig <a name="SecurityCenterSubscriptionPricingConfig" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_subscription_pricing.SecurityCenterSubscriptionPricingConfig;

SecurityCenterSubscriptionPricingConfig.builder()
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
    .tier(java.lang.String)
//  .id(java.lang.String)
//  .resourceType(java.lang.String)
//  .subplan(java.lang.String)
//  .timeouts(SecurityCenterSubscriptionPricingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.subplan">subplan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#tier SecurityCenterSubscriptionPricing#tier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#id SecurityCenterSubscriptionPricing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#resource_type SecurityCenterSubscriptionPricing#resource_type}.

---

##### `subplan`<sup>Optional</sup> <a name="subplan" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.subplan"></a>

```java
public java.lang.String getSubplan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#subplan SecurityCenterSubscriptionPricing#subplan}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingConfig.property.timeouts"></a>

```java
public SecurityCenterSubscriptionPricingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#timeouts SecurityCenterSubscriptionPricing#timeouts}

---

### SecurityCenterSubscriptionPricingTimeouts <a name="SecurityCenterSubscriptionPricingTimeouts" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_subscription_pricing.SecurityCenterSubscriptionPricingTimeouts;

SecurityCenterSubscriptionPricingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#create SecurityCenterSubscriptionPricing#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#delete SecurityCenterSubscriptionPricing#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#read SecurityCenterSubscriptionPricing#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#update SecurityCenterSubscriptionPricing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#create SecurityCenterSubscriptionPricing#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#delete SecurityCenterSubscriptionPricing#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#read SecurityCenterSubscriptionPricing#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/security_center_subscription_pricing#update SecurityCenterSubscriptionPricing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterSubscriptionPricingTimeoutsOutputReference <a name="SecurityCenterSubscriptionPricingTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.security_center_subscription_pricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference;

new SecurityCenterSubscriptionPricingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterSubscriptionPricing.SecurityCenterSubscriptionPricingTimeouts">SecurityCenterSubscriptionPricingTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



