# `mobileNetworkService` Submodule <a name="`mobileNetworkService` Submodule" id="@cdktf/provider-azurerm.mobileNetworkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkService <a name="MobileNetworkService" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service azurerm_mobile_network_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkService;

MobileNetworkService.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .mobileNetworkId(java.lang.String)
    .name(java.lang.String)
    .pccRule(IResolvable)
    .pccRule(java.util.List<MobileNetworkServicePccRule>)
    .servicePrecedence(java.lang.Number)
//  .id(java.lang.String)
//  .serviceQosPolicy(MobileNetworkServiceServiceQosPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MobileNetworkServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#location MobileNetworkService#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.mobileNetworkId">mobileNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#mobile_network_id MobileNetworkService#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.pccRule">pccRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>></code> | pcc_rule block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.servicePrecedence">servicePrecedence</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#service_precedence MobileNetworkService#service_precedence}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#id MobileNetworkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.serviceQosPolicy">serviceQosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a></code> | service_qos_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#tags MobileNetworkService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#location MobileNetworkService#location}.

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.mobileNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#mobile_network_id MobileNetworkService#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}.

---

##### `pccRule`<sup>Required</sup> <a name="pccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.pccRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>>

pcc_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#pcc_rule MobileNetworkService#pcc_rule}

---

##### `servicePrecedence`<sup>Required</sup> <a name="servicePrecedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.servicePrecedence"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#service_precedence MobileNetworkService#service_precedence}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#id MobileNetworkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceQosPolicy`<sup>Optional</sup> <a name="serviceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.serviceQosPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

service_qos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#service_qos_policy MobileNetworkService#service_qos_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#tags MobileNetworkService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#timeouts MobileNetworkService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putPccRule">putPccRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putServiceQosPolicy">putServiceQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetServiceQosPolicy">resetServiceQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putPccRule` <a name="putPccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putPccRule"></a>

```java
public void putPccRule(IResolvable OR java.util.List<MobileNetworkServicePccRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putPccRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>>

---

##### `putServiceQosPolicy` <a name="putServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putServiceQosPolicy"></a>

```java
public void putServiceQosPolicy(MobileNetworkServiceServiceQosPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putServiceQosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putTimeouts"></a>

```java
public void putTimeouts(MobileNetworkServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetId"></a>

```java
public void resetId()
```

##### `resetServiceQosPolicy` <a name="resetServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetServiceQosPolicy"></a>

```java
public void resetServiceQosPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkService;

MobileNetworkService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkService;

MobileNetworkService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkService;

MobileNetworkService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkService;

MobileNetworkService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MobileNetworkService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MobileNetworkService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MobileNetworkService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MobileNetworkService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRule">pccRule</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList">MobileNetworkServicePccRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicy">serviceQosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference">MobileNetworkServiceServiceQosPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference">MobileNetworkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkIdInput">mobileNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRuleInput">pccRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedenceInput">servicePrecedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicyInput">serviceQosPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkId">mobileNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedence">servicePrecedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pccRule`<sup>Required</sup> <a name="pccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRule"></a>

```java
public MobileNetworkServicePccRuleList getPccRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList">MobileNetworkServicePccRuleList</a>

---

##### `serviceQosPolicy`<sup>Required</sup> <a name="serviceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicy"></a>

```java
public MobileNetworkServiceServiceQosPolicyOutputReference getServiceQosPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference">MobileNetworkServiceServiceQosPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeouts"></a>

```java
public MobileNetworkServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference">MobileNetworkServiceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mobileNetworkIdInput`<sup>Optional</sup> <a name="mobileNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkIdInput"></a>

```java
public java.lang.String getMobileNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pccRuleInput`<sup>Optional</sup> <a name="pccRuleInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRuleInput"></a>

```java
public java.lang.Object getPccRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>>

---

##### `servicePrecedenceInput`<sup>Optional</sup> <a name="servicePrecedenceInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedenceInput"></a>

```java
public java.lang.Number getServicePrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `serviceQosPolicyInput`<sup>Optional</sup> <a name="serviceQosPolicyInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicyInput"></a>

```java
public MobileNetworkServiceServiceQosPolicy getServiceQosPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkId"></a>

```java
public java.lang.String getMobileNetworkId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servicePrecedence`<sup>Required</sup> <a name="servicePrecedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedence"></a>

```java
public java.lang.Number getServicePrecedence();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkServiceConfig <a name="MobileNetworkServiceConfig" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServiceConfig;

MobileNetworkServiceConfig.builder()
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
    .location(java.lang.String)
    .mobileNetworkId(java.lang.String)
    .name(java.lang.String)
    .pccRule(IResolvable)
    .pccRule(java.util.List<MobileNetworkServicePccRule>)
    .servicePrecedence(java.lang.Number)
//  .id(java.lang.String)
//  .serviceQosPolicy(MobileNetworkServiceServiceQosPolicy)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MobileNetworkServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#location MobileNetworkService#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.mobileNetworkId">mobileNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#mobile_network_id MobileNetworkService#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.pccRule">pccRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>></code> | pcc_rule block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.servicePrecedence">servicePrecedence</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#service_precedence MobileNetworkService#service_precedence}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#id MobileNetworkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.serviceQosPolicy">serviceQosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a></code> | service_qos_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#tags MobileNetworkService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#location MobileNetworkService#location}.

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.mobileNetworkId"></a>

```java
public java.lang.String getMobileNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#mobile_network_id MobileNetworkService#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}.

---

##### `pccRule`<sup>Required</sup> <a name="pccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.pccRule"></a>

```java
public java.lang.Object getPccRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>>

pcc_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#pcc_rule MobileNetworkService#pcc_rule}

---

##### `servicePrecedence`<sup>Required</sup> <a name="servicePrecedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.servicePrecedence"></a>

```java
public java.lang.Number getServicePrecedence();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#service_precedence MobileNetworkService#service_precedence}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#id MobileNetworkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceQosPolicy`<sup>Optional</sup> <a name="serviceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.serviceQosPolicy"></a>

```java
public MobileNetworkServiceServiceQosPolicy getServiceQosPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

service_qos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#service_qos_policy MobileNetworkService#service_qos_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#tags MobileNetworkService#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.timeouts"></a>

```java
public MobileNetworkServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#timeouts MobileNetworkService#timeouts}

---

### MobileNetworkServicePccRule <a name="MobileNetworkServicePccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRule;

MobileNetworkServicePccRule.builder()
    .name(java.lang.String)
    .precedence(java.lang.Number)
    .serviceDataFlowTemplate(IResolvable)
    .serviceDataFlowTemplate(java.util.List<MobileNetworkServicePccRuleServiceDataFlowTemplate>)
//  .qosPolicy(MobileNetworkServicePccRuleQosPolicy)
//  .trafficControlEnabled(java.lang.Boolean)
//  .trafficControlEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#precedence MobileNetworkService#precedence}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.serviceDataFlowTemplate">serviceDataFlowTemplate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>></code> | service_data_flow_template block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.qosPolicy">qosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a></code> | qos_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.trafficControlEnabled">trafficControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#traffic_control_enabled MobileNetworkService#traffic_control_enabled}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}.

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#precedence MobileNetworkService#precedence}.

---

##### `serviceDataFlowTemplate`<sup>Required</sup> <a name="serviceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.serviceDataFlowTemplate"></a>

```java
public java.lang.Object getServiceDataFlowTemplate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>>

service_data_flow_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#service_data_flow_template MobileNetworkService#service_data_flow_template}

---

##### `qosPolicy`<sup>Optional</sup> <a name="qosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.qosPolicy"></a>

```java
public MobileNetworkServicePccRuleQosPolicy getQosPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

qos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#qos_policy MobileNetworkService#qos_policy}

---

##### `trafficControlEnabled`<sup>Optional</sup> <a name="trafficControlEnabled" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.trafficControlEnabled"></a>

```java
public java.lang.Object getTrafficControlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#traffic_control_enabled MobileNetworkService#traffic_control_enabled}.

---

### MobileNetworkServicePccRuleQosPolicy <a name="MobileNetworkServicePccRuleQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleQosPolicy;

MobileNetworkServicePccRuleQosPolicy.builder()
    .maximumBitRate(MobileNetworkServicePccRuleQosPolicyMaximumBitRate)
    .qosIndicator(java.lang.Number)
//  .allocationAndRetentionPriorityLevel(java.lang.Number)
//  .guaranteedBitRate(MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate)
//  .preemptionCapability(java.lang.String)
//  .preemptionVulnerability(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.maximumBitRate">maximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a></code> | maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.qosIndicator">qosIndicator</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.allocationAndRetentionPriorityLevel">allocationAndRetentionPriorityLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.guaranteedBitRate">guaranteedBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a></code> | guaranteed_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionCapability">preemptionCapability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionVulnerability">preemptionVulnerability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}. |

---

##### `maximumBitRate`<sup>Required</sup> <a name="maximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.maximumBitRate"></a>

```java
public MobileNetworkServicePccRuleQosPolicyMaximumBitRate getMaximumBitRate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#maximum_bit_rate MobileNetworkService#maximum_bit_rate}

---

##### `qosIndicator`<sup>Required</sup> <a name="qosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.qosIndicator"></a>

```java
public java.lang.Number getQosIndicator();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}.

---

##### `allocationAndRetentionPriorityLevel`<sup>Optional</sup> <a name="allocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.allocationAndRetentionPriorityLevel"></a>

```java
public java.lang.Number getAllocationAndRetentionPriorityLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}.

---

##### `guaranteedBitRate`<sup>Optional</sup> <a name="guaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.guaranteedBitRate"></a>

```java
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate getGuaranteedBitRate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

guaranteed_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#guaranteed_bit_rate MobileNetworkService#guaranteed_bit_rate}

---

##### `preemptionCapability`<sup>Optional</sup> <a name="preemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionCapability"></a>

```java
public java.lang.String getPreemptionCapability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}.

---

##### `preemptionVulnerability`<sup>Optional</sup> <a name="preemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionVulnerability"></a>

```java
public java.lang.String getPreemptionVulnerability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}.

---

### MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate <a name="MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate;

MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.builder()
    .downlink(java.lang.String)
    .uplink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.downlink">downlink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.uplink">uplink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}. |

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.downlink"></a>

```java
public java.lang.String getDownlink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}.

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.uplink"></a>

```java
public java.lang.String getUplink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}.

---

### MobileNetworkServicePccRuleQosPolicyMaximumBitRate <a name="MobileNetworkServicePccRuleQosPolicyMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleQosPolicyMaximumBitRate;

MobileNetworkServicePccRuleQosPolicyMaximumBitRate.builder()
    .downlink(java.lang.String)
    .uplink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.downlink">downlink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.uplink">uplink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}. |

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.downlink"></a>

```java
public java.lang.String getDownlink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}.

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.uplink"></a>

```java
public java.lang.String getUplink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}.

---

### MobileNetworkServicePccRuleServiceDataFlowTemplate <a name="MobileNetworkServicePccRuleServiceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleServiceDataFlowTemplate;

MobileNetworkServicePccRuleServiceDataFlowTemplate.builder()
    .direction(java.lang.String)
    .name(java.lang.String)
    .protocol(java.util.List<java.lang.String>)
    .remoteIpList(java.util.List<java.lang.String>)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#direction MobileNetworkService#direction}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.protocol">protocol</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#protocol MobileNetworkService#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.remoteIpList">remoteIpList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#remote_ip_list MobileNetworkService#remote_ip_list}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#ports MobileNetworkService#ports}. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#direction MobileNetworkService#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#name MobileNetworkService#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.protocol"></a>

```java
public java.util.List<java.lang.String> getProtocol();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#protocol MobileNetworkService#protocol}.

---

##### `remoteIpList`<sup>Required</sup> <a name="remoteIpList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.remoteIpList"></a>

```java
public java.util.List<java.lang.String> getRemoteIpList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#remote_ip_list MobileNetworkService#remote_ip_list}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#ports MobileNetworkService#ports}.

---

### MobileNetworkServiceServiceQosPolicy <a name="MobileNetworkServiceServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServiceServiceQosPolicy;

MobileNetworkServiceServiceQosPolicy.builder()
    .maximumBitRate(MobileNetworkServiceServiceQosPolicyMaximumBitRate)
//  .allocationAndRetentionPriorityLevel(java.lang.Number)
//  .preemptionCapability(java.lang.String)
//  .preemptionVulnerability(java.lang.String)
//  .qosIndicator(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.maximumBitRate">maximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a></code> | maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.allocationAndRetentionPriorityLevel">allocationAndRetentionPriorityLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionCapability">preemptionCapability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionVulnerability">preemptionVulnerability</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.qosIndicator">qosIndicator</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}. |

---

##### `maximumBitRate`<sup>Required</sup> <a name="maximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.maximumBitRate"></a>

```java
public MobileNetworkServiceServiceQosPolicyMaximumBitRate getMaximumBitRate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#maximum_bit_rate MobileNetworkService#maximum_bit_rate}

---

##### `allocationAndRetentionPriorityLevel`<sup>Optional</sup> <a name="allocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.allocationAndRetentionPriorityLevel"></a>

```java
public java.lang.Number getAllocationAndRetentionPriorityLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}.

---

##### `preemptionCapability`<sup>Optional</sup> <a name="preemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionCapability"></a>

```java
public java.lang.String getPreemptionCapability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}.

---

##### `preemptionVulnerability`<sup>Optional</sup> <a name="preemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionVulnerability"></a>

```java
public java.lang.String getPreemptionVulnerability();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}.

---

##### `qosIndicator`<sup>Optional</sup> <a name="qosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.qosIndicator"></a>

```java
public java.lang.Number getQosIndicator();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}.

---

### MobileNetworkServiceServiceQosPolicyMaximumBitRate <a name="MobileNetworkServiceServiceQosPolicyMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServiceServiceQosPolicyMaximumBitRate;

MobileNetworkServiceServiceQosPolicyMaximumBitRate.builder()
    .downlink(java.lang.String)
    .uplink(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.downlink">downlink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.uplink">uplink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}. |

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.downlink"></a>

```java
public java.lang.String getDownlink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}.

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.uplink"></a>

```java
public java.lang.String getUplink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}.

---

### MobileNetworkServiceTimeouts <a name="MobileNetworkServiceTimeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServiceTimeouts;

MobileNetworkServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#create MobileNetworkService#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#delete MobileNetworkService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#read MobileNetworkService#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#update MobileNetworkService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#create MobileNetworkService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#delete MobileNetworkService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#read MobileNetworkService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_service#update MobileNetworkService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkServicePccRuleList <a name="MobileNetworkServicePccRuleList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleList;

new MobileNetworkServicePccRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.get"></a>

```java
public MobileNetworkServicePccRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>>

---


### MobileNetworkServicePccRuleOutputReference <a name="MobileNetworkServicePccRuleOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleOutputReference;

new MobileNetworkServicePccRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putQosPolicy">putQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putServiceDataFlowTemplate">putServiceDataFlowTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetQosPolicy">resetQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetTrafficControlEnabled">resetTrafficControlEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQosPolicy` <a name="putQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putQosPolicy"></a>

```java
public void putQosPolicy(MobileNetworkServicePccRuleQosPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putQosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

---

##### `putServiceDataFlowTemplate` <a name="putServiceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putServiceDataFlowTemplate"></a>

```java
public void putServiceDataFlowTemplate(IResolvable OR java.util.List<MobileNetworkServicePccRuleServiceDataFlowTemplate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putServiceDataFlowTemplate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>>

---

##### `resetQosPolicy` <a name="resetQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetQosPolicy"></a>

```java
public void resetQosPolicy()
```

##### `resetTrafficControlEnabled` <a name="resetTrafficControlEnabled" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetTrafficControlEnabled"></a>

```java
public void resetTrafficControlEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicy">qosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference">MobileNetworkServicePccRuleQosPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplate">serviceDataFlowTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList">MobileNetworkServicePccRuleServiceDataFlowTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedenceInput">precedenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicyInput">qosPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplateInput">serviceDataFlowTemplateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabledInput">trafficControlEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedence">precedence</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabled">trafficControlEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qosPolicy`<sup>Required</sup> <a name="qosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicy"></a>

```java
public MobileNetworkServicePccRuleQosPolicyOutputReference getQosPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference">MobileNetworkServicePccRuleQosPolicyOutputReference</a>

---

##### `serviceDataFlowTemplate`<sup>Required</sup> <a name="serviceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplate"></a>

```java
public MobileNetworkServicePccRuleServiceDataFlowTemplateList getServiceDataFlowTemplate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList">MobileNetworkServicePccRuleServiceDataFlowTemplateList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `precedenceInput`<sup>Optional</sup> <a name="precedenceInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedenceInput"></a>

```java
public java.lang.Number getPrecedenceInput();
```

- *Type:* java.lang.Number

---

##### `qosPolicyInput`<sup>Optional</sup> <a name="qosPolicyInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicyInput"></a>

```java
public MobileNetworkServicePccRuleQosPolicy getQosPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

---

##### `serviceDataFlowTemplateInput`<sup>Optional</sup> <a name="serviceDataFlowTemplateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplateInput"></a>

```java
public java.lang.Object getServiceDataFlowTemplateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>>

---

##### `trafficControlEnabledInput`<sup>Optional</sup> <a name="trafficControlEnabledInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabledInput"></a>

```java
public java.lang.Object getTrafficControlEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedence"></a>

```java
public java.lang.Number getPrecedence();
```

- *Type:* java.lang.Number

---

##### `trafficControlEnabled`<sup>Required</sup> <a name="trafficControlEnabled" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabled"></a>

```java
public java.lang.Object getTrafficControlEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule">MobileNetworkServicePccRule</a>

---


### MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference <a name="MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference;

new MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlinkInput">downlinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplinkInput">uplinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlink">downlink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplink">uplink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downlinkInput`<sup>Optional</sup> <a name="downlinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlinkInput"></a>

```java
public java.lang.String getDownlinkInput();
```

- *Type:* java.lang.String

---

##### `uplinkInput`<sup>Optional</sup> <a name="uplinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplinkInput"></a>

```java
public java.lang.String getUplinkInput();
```

- *Type:* java.lang.String

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlink"></a>

```java
public java.lang.String getDownlink();
```

- *Type:* java.lang.String

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplink"></a>

```java
public java.lang.String getUplink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.internalValue"></a>

```java
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

---


### MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference <a name="MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference;

new MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlinkInput">downlinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplinkInput">uplinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downlinkInput`<sup>Optional</sup> <a name="downlinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlinkInput"></a>

```java
public java.lang.String getDownlinkInput();
```

- *Type:* java.lang.String

---

##### `uplinkInput`<sup>Optional</sup> <a name="uplinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplinkInput"></a>

```java
public java.lang.String getUplinkInput();
```

- *Type:* java.lang.String

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlink"></a>

```java
public java.lang.String getDownlink();
```

- *Type:* java.lang.String

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplink"></a>

```java
public java.lang.String getUplink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.internalValue"></a>

```java
public MobileNetworkServicePccRuleQosPolicyMaximumBitRate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

---


### MobileNetworkServicePccRuleQosPolicyOutputReference <a name="MobileNetworkServicePccRuleQosPolicyOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleQosPolicyOutputReference;

new MobileNetworkServicePccRuleQosPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putGuaranteedBitRate">putGuaranteedBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putMaximumBitRate">putMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel">resetAllocationAndRetentionPriorityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetGuaranteedBitRate">resetGuaranteedBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionCapability">resetPreemptionCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionVulnerability">resetPreemptionVulnerability</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGuaranteedBitRate` <a name="putGuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putGuaranteedBitRate"></a>

```java
public void putGuaranteedBitRate(MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putGuaranteedBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

---

##### `putMaximumBitRate` <a name="putMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putMaximumBitRate"></a>

```java
public void putMaximumBitRate(MobileNetworkServicePccRuleQosPolicyMaximumBitRate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

---

##### `resetAllocationAndRetentionPriorityLevel` <a name="resetAllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel"></a>

```java
public void resetAllocationAndRetentionPriorityLevel()
```

##### `resetGuaranteedBitRate` <a name="resetGuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetGuaranteedBitRate"></a>

```java
public void resetGuaranteedBitRate()
```

##### `resetPreemptionCapability` <a name="resetPreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionCapability"></a>

```java
public void resetPreemptionCapability()
```

##### `resetPreemptionVulnerability` <a name="resetPreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionVulnerability"></a>

```java
public void resetPreemptionVulnerability()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRate">guaranteedBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRate">maximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput">allocationAndRetentionPriorityLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRateInput">guaranteedBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRateInput">maximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapabilityInput">preemptionCapabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerabilityInput">preemptionVulnerabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicatorInput">qosIndicatorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel">allocationAndRetentionPriorityLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapability">preemptionCapability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerability">preemptionVulnerability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicator">qosIndicator</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guaranteedBitRate`<sup>Required</sup> <a name="guaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRate"></a>

```java
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference getGuaranteedBitRate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference</a>

---

##### `maximumBitRate`<sup>Required</sup> <a name="maximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRate"></a>

```java
public MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference getMaximumBitRate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference</a>

---

##### `allocationAndRetentionPriorityLevelInput`<sup>Optional</sup> <a name="allocationAndRetentionPriorityLevelInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput"></a>

```java
public java.lang.Number getAllocationAndRetentionPriorityLevelInput();
```

- *Type:* java.lang.Number

---

##### `guaranteedBitRateInput`<sup>Optional</sup> <a name="guaranteedBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRateInput"></a>

```java
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate getGuaranteedBitRateInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

---

##### `maximumBitRateInput`<sup>Optional</sup> <a name="maximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRateInput"></a>

```java
public MobileNetworkServicePccRuleQosPolicyMaximumBitRate getMaximumBitRateInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

---

##### `preemptionCapabilityInput`<sup>Optional</sup> <a name="preemptionCapabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapabilityInput"></a>

```java
public java.lang.String getPreemptionCapabilityInput();
```

- *Type:* java.lang.String

---

##### `preemptionVulnerabilityInput`<sup>Optional</sup> <a name="preemptionVulnerabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerabilityInput"></a>

```java
public java.lang.String getPreemptionVulnerabilityInput();
```

- *Type:* java.lang.String

---

##### `qosIndicatorInput`<sup>Optional</sup> <a name="qosIndicatorInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicatorInput"></a>

```java
public java.lang.Number getQosIndicatorInput();
```

- *Type:* java.lang.Number

---

##### `allocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="allocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```java
public java.lang.Number getAllocationAndRetentionPriorityLevel();
```

- *Type:* java.lang.Number

---

##### `preemptionCapability`<sup>Required</sup> <a name="preemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapability"></a>

```java
public java.lang.String getPreemptionCapability();
```

- *Type:* java.lang.String

---

##### `preemptionVulnerability`<sup>Required</sup> <a name="preemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerability"></a>

```java
public java.lang.String getPreemptionVulnerability();
```

- *Type:* java.lang.String

---

##### `qosIndicator`<sup>Required</sup> <a name="qosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicator"></a>

```java
public java.lang.Number getQosIndicator();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.internalValue"></a>

```java
public MobileNetworkServicePccRuleQosPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

---


### MobileNetworkServicePccRuleServiceDataFlowTemplateList <a name="MobileNetworkServicePccRuleServiceDataFlowTemplateList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleServiceDataFlowTemplateList;

new MobileNetworkServicePccRuleServiceDataFlowTemplateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.get"></a>

```java
public MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>>

---


### MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference <a name="MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference;

new MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpListInput">remoteIpListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocol">protocol</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpList">remoteIpList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocolInput"></a>

```java
public java.util.List<java.lang.String> getProtocolInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteIpListInput`<sup>Optional</sup> <a name="remoteIpListInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpListInput"></a>

```java
public java.util.List<java.lang.String> getRemoteIpListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocol"></a>

```java
public java.util.List<java.lang.String> getProtocol();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteIpList`<sup>Required</sup> <a name="remoteIpList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpList"></a>

```java
public java.util.List<java.lang.String> getRemoteIpList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate">MobileNetworkServicePccRuleServiceDataFlowTemplate</a>

---


### MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference <a name="MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference;

new MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlinkInput">downlinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplinkInput">uplinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlink">downlink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplink">uplink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `downlinkInput`<sup>Optional</sup> <a name="downlinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlinkInput"></a>

```java
public java.lang.String getDownlinkInput();
```

- *Type:* java.lang.String

---

##### `uplinkInput`<sup>Optional</sup> <a name="uplinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplinkInput"></a>

```java
public java.lang.String getUplinkInput();
```

- *Type:* java.lang.String

---

##### `downlink`<sup>Required</sup> <a name="downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlink"></a>

```java
public java.lang.String getDownlink();
```

- *Type:* java.lang.String

---

##### `uplink`<sup>Required</sup> <a name="uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplink"></a>

```java
public java.lang.String getUplink();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.internalValue"></a>

```java
public MobileNetworkServiceServiceQosPolicyMaximumBitRate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

---


### MobileNetworkServiceServiceQosPolicyOutputReference <a name="MobileNetworkServiceServiceQosPolicyOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServiceServiceQosPolicyOutputReference;

new MobileNetworkServiceServiceQosPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.putMaximumBitRate">putMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel">resetAllocationAndRetentionPriorityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionCapability">resetPreemptionCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionVulnerability">resetPreemptionVulnerability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetQosIndicator">resetQosIndicator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaximumBitRate` <a name="putMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.putMaximumBitRate"></a>

```java
public void putMaximumBitRate(MobileNetworkServiceServiceQosPolicyMaximumBitRate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.putMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

---

##### `resetAllocationAndRetentionPriorityLevel` <a name="resetAllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel"></a>

```java
public void resetAllocationAndRetentionPriorityLevel()
```

##### `resetPreemptionCapability` <a name="resetPreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionCapability"></a>

```java
public void resetPreemptionCapability()
```

##### `resetPreemptionVulnerability` <a name="resetPreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionVulnerability"></a>

```java
public void resetPreemptionVulnerability()
```

##### `resetQosIndicator` <a name="resetQosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetQosIndicator"></a>

```java
public void resetQosIndicator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRate">maximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference">MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput">allocationAndRetentionPriorityLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRateInput">maximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapabilityInput">preemptionCapabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerabilityInput">preemptionVulnerabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicatorInput">qosIndicatorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel">allocationAndRetentionPriorityLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapability">preemptionCapability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerability">preemptionVulnerability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicator">qosIndicator</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumBitRate`<sup>Required</sup> <a name="maximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRate"></a>

```java
public MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference getMaximumBitRate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference">MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference</a>

---

##### `allocationAndRetentionPriorityLevelInput`<sup>Optional</sup> <a name="allocationAndRetentionPriorityLevelInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput"></a>

```java
public java.lang.Number getAllocationAndRetentionPriorityLevelInput();
```

- *Type:* java.lang.Number

---

##### `maximumBitRateInput`<sup>Optional</sup> <a name="maximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRateInput"></a>

```java
public MobileNetworkServiceServiceQosPolicyMaximumBitRate getMaximumBitRateInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

---

##### `preemptionCapabilityInput`<sup>Optional</sup> <a name="preemptionCapabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapabilityInput"></a>

```java
public java.lang.String getPreemptionCapabilityInput();
```

- *Type:* java.lang.String

---

##### `preemptionVulnerabilityInput`<sup>Optional</sup> <a name="preemptionVulnerabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerabilityInput"></a>

```java
public java.lang.String getPreemptionVulnerabilityInput();
```

- *Type:* java.lang.String

---

##### `qosIndicatorInput`<sup>Optional</sup> <a name="qosIndicatorInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicatorInput"></a>

```java
public java.lang.Number getQosIndicatorInput();
```

- *Type:* java.lang.Number

---

##### `allocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="allocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```java
public java.lang.Number getAllocationAndRetentionPriorityLevel();
```

- *Type:* java.lang.Number

---

##### `preemptionCapability`<sup>Required</sup> <a name="preemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapability"></a>

```java
public java.lang.String getPreemptionCapability();
```

- *Type:* java.lang.String

---

##### `preemptionVulnerability`<sup>Required</sup> <a name="preemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerability"></a>

```java
public java.lang.String getPreemptionVulnerability();
```

- *Type:* java.lang.String

---

##### `qosIndicator`<sup>Required</sup> <a name="qosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicator"></a>

```java
public java.lang.Number getQosIndicator();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.internalValue"></a>

```java
public MobileNetworkServiceServiceQosPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

---


### MobileNetworkServiceTimeoutsOutputReference <a name="MobileNetworkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mobile_network_service.MobileNetworkServiceTimeoutsOutputReference;

new MobileNetworkServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a>

---



