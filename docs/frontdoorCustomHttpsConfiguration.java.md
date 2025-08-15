# `frontdoorCustomHttpsConfiguration` Submodule <a name="`frontdoorCustomHttpsConfiguration` Submodule" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorCustomHttpsConfiguration <a name="FrontdoorCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration azurerm_frontdoor_custom_https_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfiguration;

FrontdoorCustomHttpsConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .customHttpsProvisioningEnabled(java.lang.Boolean)
    .customHttpsProvisioningEnabled(IResolvable)
    .frontendEndpointId(java.lang.String)
//  .customHttpsConfiguration(FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration)
//  .id(java.lang.String)
//  .timeouts(FrontdoorCustomHttpsConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsProvisioningEnabled">customHttpsProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.frontendEndpointId">frontendEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsConfiguration">customHttpsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | custom_https_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHttpsProvisioningEnabled`<sup>Required</sup> <a name="customHttpsProvisioningEnabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsProvisioningEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}.

---

##### `frontendEndpointId`<sup>Required</sup> <a name="frontendEndpointId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.frontendEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}.

---

##### `customHttpsConfiguration`<sup>Optional</sup> <a name="customHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.customHttpsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

custom_https_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#timeouts FrontdoorCustomHttpsConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration">putCustomHttpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetCustomHttpsConfiguration">resetCustomHttpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomHttpsConfiguration` <a name="putCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration"></a>

```java
public void putCustomHttpsConfiguration(FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putCustomHttpsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts"></a>

```java
public void putTimeouts(FrontdoorCustomHttpsConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

---

##### `resetCustomHttpsConfiguration` <a name="resetCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetCustomHttpsConfiguration"></a>

```java
public void resetCustomHttpsConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FrontdoorCustomHttpsConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfiguration;

FrontdoorCustomHttpsConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfiguration;

FrontdoorCustomHttpsConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfiguration;

FrontdoorCustomHttpsConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfiguration;

FrontdoorCustomHttpsConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FrontdoorCustomHttpsConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FrontdoorCustomHttpsConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FrontdoorCustomHttpsConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FrontdoorCustomHttpsConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FrontdoorCustomHttpsConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfiguration">customHttpsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference">FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference">FrontdoorCustomHttpsConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfigurationInput">customHttpsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabledInput">customHttpsProvisioningEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointIdInput">frontendEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabled">customHttpsProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointId">frontendEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHttpsConfiguration`<sup>Required</sup> <a name="customHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfiguration"></a>

```java
public FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference getCustomHttpsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference">FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeouts"></a>

```java
public FrontdoorCustomHttpsConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference">FrontdoorCustomHttpsConfigurationTimeoutsOutputReference</a>

---

##### `customHttpsConfigurationInput`<sup>Optional</sup> <a name="customHttpsConfigurationInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsConfigurationInput"></a>

```java
public FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration getCustomHttpsConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---

##### `customHttpsProvisioningEnabledInput`<sup>Optional</sup> <a name="customHttpsProvisioningEnabledInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabledInput"></a>

```java
public java.lang.Object getCustomHttpsProvisioningEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frontendEndpointIdInput`<sup>Optional</sup> <a name="frontendEndpointIdInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointIdInput"></a>

```java
public java.lang.String getFrontendEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

---

##### `customHttpsProvisioningEnabled`<sup>Required</sup> <a name="customHttpsProvisioningEnabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.customHttpsProvisioningEnabled"></a>

```java
public java.lang.Object getCustomHttpsProvisioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frontendEndpointId`<sup>Required</sup> <a name="frontendEndpointId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.frontendEndpointId"></a>

```java
public java.lang.String getFrontendEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorCustomHttpsConfigurationConfig <a name="FrontdoorCustomHttpsConfigurationConfig" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfigurationConfig;

FrontdoorCustomHttpsConfigurationConfig.builder()
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
    .customHttpsProvisioningEnabled(java.lang.Boolean)
    .customHttpsProvisioningEnabled(IResolvable)
    .frontendEndpointId(java.lang.String)
//  .customHttpsConfiguration(FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration)
//  .id(java.lang.String)
//  .timeouts(FrontdoorCustomHttpsConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsProvisioningEnabled">customHttpsProvisioningEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.frontendEndpointId">frontendEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsConfiguration">customHttpsConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | custom_https_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHttpsProvisioningEnabled`<sup>Required</sup> <a name="customHttpsProvisioningEnabled" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsProvisioningEnabled"></a>

```java
public java.lang.Object getCustomHttpsProvisioningEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#custom_https_provisioning_enabled FrontdoorCustomHttpsConfiguration#custom_https_provisioning_enabled}.

---

##### `frontendEndpointId`<sup>Required</sup> <a name="frontendEndpointId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.frontendEndpointId"></a>

```java
public java.lang.String getFrontendEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#frontend_endpoint_id FrontdoorCustomHttpsConfiguration#frontend_endpoint_id}.

---

##### `customHttpsConfiguration`<sup>Optional</sup> <a name="customHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.customHttpsConfiguration"></a>

```java
public FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration getCustomHttpsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

custom_https_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#custom_https_configuration FrontdoorCustomHttpsConfiguration#custom_https_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#id FrontdoorCustomHttpsConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationConfig.property.timeouts"></a>

```java
public FrontdoorCustomHttpsConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#timeouts FrontdoorCustomHttpsConfiguration#timeouts}

---

### FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration <a name="FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration;

FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.builder()
//  .azureKeyVaultCertificateSecretName(java.lang.String)
//  .azureKeyVaultCertificateSecretVersion(java.lang.String)
//  .azureKeyVaultCertificateVaultId(java.lang.String)
//  .certificateSource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretName">azureKeyVaultCertificateSecretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretVersion">azureKeyVaultCertificateSecretVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateVaultId">azureKeyVaultCertificateVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}. |

---

##### `azureKeyVaultCertificateSecretName`<sup>Optional</sup> <a name="azureKeyVaultCertificateSecretName" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretName"></a>

```java
public java.lang.String getAzureKeyVaultCertificateSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_name FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_name}.

---

##### `azureKeyVaultCertificateSecretVersion`<sup>Optional</sup> <a name="azureKeyVaultCertificateSecretVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateSecretVersion"></a>

```java
public java.lang.String getAzureKeyVaultCertificateSecretVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_secret_version FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_secret_version}.

---

##### `azureKeyVaultCertificateVaultId`<sup>Optional</sup> <a name="azureKeyVaultCertificateVaultId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.azureKeyVaultCertificateVaultId"></a>

```java
public java.lang.String getAzureKeyVaultCertificateVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#azure_key_vault_certificate_vault_id FrontdoorCustomHttpsConfiguration#azure_key_vault_certificate_vault_id}.

---

##### `certificateSource`<sup>Optional</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#certificate_source FrontdoorCustomHttpsConfiguration#certificate_source}.

---

### FrontdoorCustomHttpsConfigurationTimeouts <a name="FrontdoorCustomHttpsConfigurationTimeouts" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfigurationTimeouts;

FrontdoorCustomHttpsConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#create FrontdoorCustomHttpsConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#delete FrontdoorCustomHttpsConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#read FrontdoorCustomHttpsConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/frontdoor_custom_https_configuration#update FrontdoorCustomHttpsConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference <a name="FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference;

new FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretName">resetAzureKeyVaultCertificateSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretVersion">resetAzureKeyVaultCertificateSecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateVaultId">resetAzureKeyVaultCertificateVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetCertificateSource">resetCertificateSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureKeyVaultCertificateSecretName` <a name="resetAzureKeyVaultCertificateSecretName" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretName"></a>

```java
public void resetAzureKeyVaultCertificateSecretName()
```

##### `resetAzureKeyVaultCertificateSecretVersion` <a name="resetAzureKeyVaultCertificateSecretVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateSecretVersion"></a>

```java
public void resetAzureKeyVaultCertificateSecretVersion()
```

##### `resetAzureKeyVaultCertificateVaultId` <a name="resetAzureKeyVaultCertificateVaultId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetAzureKeyVaultCertificateVaultId"></a>

```java
public void resetAzureKeyVaultCertificateVaultId()
```

##### `resetCertificateSource` <a name="resetCertificateSource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.resetCertificateSource"></a>

```java
public void resetCertificateSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningState">provisioningState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningSubstate">provisioningSubstate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretNameInput">azureKeyVaultCertificateSecretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersionInput">azureKeyVaultCertificateSecretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultIdInput">azureKeyVaultCertificateVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSourceInput">certificateSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretName">azureKeyVaultCertificateSecretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersion">azureKeyVaultCertificateSecretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultId">azureKeyVaultCertificateVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSource">certificateSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `provisioningState`<sup>Required</sup> <a name="provisioningState" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningState"></a>

```java
public java.lang.String getProvisioningState();
```

- *Type:* java.lang.String

---

##### `provisioningSubstate`<sup>Required</sup> <a name="provisioningSubstate" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.provisioningSubstate"></a>

```java
public java.lang.String getProvisioningSubstate();
```

- *Type:* java.lang.String

---

##### `azureKeyVaultCertificateSecretNameInput`<sup>Optional</sup> <a name="azureKeyVaultCertificateSecretNameInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretNameInput"></a>

```java
public java.lang.String getAzureKeyVaultCertificateSecretNameInput();
```

- *Type:* java.lang.String

---

##### `azureKeyVaultCertificateSecretVersionInput`<sup>Optional</sup> <a name="azureKeyVaultCertificateSecretVersionInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersionInput"></a>

```java
public java.lang.String getAzureKeyVaultCertificateSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `azureKeyVaultCertificateVaultIdInput`<sup>Optional</sup> <a name="azureKeyVaultCertificateVaultIdInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultIdInput"></a>

```java
public java.lang.String getAzureKeyVaultCertificateVaultIdInput();
```

- *Type:* java.lang.String

---

##### `certificateSourceInput`<sup>Optional</sup> <a name="certificateSourceInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSourceInput"></a>

```java
public java.lang.String getCertificateSourceInput();
```

- *Type:* java.lang.String

---

##### `azureKeyVaultCertificateSecretName`<sup>Required</sup> <a name="azureKeyVaultCertificateSecretName" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretName"></a>

```java
public java.lang.String getAzureKeyVaultCertificateSecretName();
```

- *Type:* java.lang.String

---

##### `azureKeyVaultCertificateSecretVersion`<sup>Required</sup> <a name="azureKeyVaultCertificateSecretVersion" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateSecretVersion"></a>

```java
public java.lang.String getAzureKeyVaultCertificateSecretVersion();
```

- *Type:* java.lang.String

---

##### `azureKeyVaultCertificateVaultId`<sup>Required</sup> <a name="azureKeyVaultCertificateVaultId" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.azureKeyVaultCertificateVaultId"></a>

```java
public java.lang.String getAzureKeyVaultCertificateVaultId();
```

- *Type:* java.lang.String

---

##### `certificateSource`<sup>Required</sup> <a name="certificateSource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.certificateSource"></a>

```java
public java.lang.String getCertificateSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfigurationOutputReference.property.internalValue"></a>

```java
public FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration">FrontdoorCustomHttpsConfigurationCustomHttpsConfiguration</a>

---


### FrontdoorCustomHttpsConfigurationTimeoutsOutputReference <a name="FrontdoorCustomHttpsConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.frontdoor_custom_https_configuration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference;

new FrontdoorCustomHttpsConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.frontdoorCustomHttpsConfiguration.FrontdoorCustomHttpsConfigurationTimeouts">FrontdoorCustomHttpsConfigurationTimeouts</a>

---



