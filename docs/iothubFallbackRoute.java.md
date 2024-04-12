# `iothubFallbackRoute` Submodule <a name="`iothubFallbackRoute` Submodule" id="@cdktf/provider-azurerm.iothubFallbackRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubFallbackRouteA <a name="IothubFallbackRouteA" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route azurerm_iothub_fallback_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteA;

IothubFallbackRouteA.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .endpointNames(java.util.List<java.lang.String>)
    .iothubName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .condition(java.lang.String)
//  .id(java.lang.String)
//  .source(java.lang.String)
//  .timeouts(IothubFallbackRouteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.endpointNames">endpointNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.iothubName">iothubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}.

---

##### `endpointNames`<sup>Required</sup> <a name="endpointNames" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.endpointNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}.

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.iothubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.condition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#timeouts IothubFallbackRouteA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts"></a>

```java
public void putTimeouts(IothubFallbackRouteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetId"></a>

```java
public void resetId()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetSource"></a>

```java
public void resetSource()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IothubFallbackRouteA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteA;

IothubFallbackRouteA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteA;

IothubFallbackRouteA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteA;

IothubFallbackRouteA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteA;

IothubFallbackRouteA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IothubFallbackRouteA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IothubFallbackRouteA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IothubFallbackRouteA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IothubFallbackRouteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IothubFallbackRouteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference">IothubFallbackRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNamesInput">endpointNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubNameInput">iothubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNames">endpointNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubName">iothubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeouts"></a>

```java
public IothubFallbackRouteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference">IothubFallbackRouteTimeoutsOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointNamesInput`<sup>Optional</sup> <a name="endpointNamesInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNamesInput"></a>

```java
public java.util.List<java.lang.String> getEndpointNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubNameInput`<sup>Optional</sup> <a name="iothubNameInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubNameInput"></a>

```java
public java.lang.String getIothubNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointNames`<sup>Required</sup> <a name="endpointNames" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNames"></a>

```java
public java.util.List<java.lang.String> getEndpointNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubName"></a>

```java
public java.lang.String getIothubName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IothubFallbackRouteAConfig <a name="IothubFallbackRouteAConfig" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteAConfig;

IothubFallbackRouteAConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .endpointNames(java.util.List<java.lang.String>)
    .iothubName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .condition(java.lang.String)
//  .id(java.lang.String)
//  .source(java.lang.String)
//  .timeouts(IothubFallbackRouteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.endpointNames">endpointNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.iothubName">iothubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}.

---

##### `endpointNames`<sup>Required</sup> <a name="endpointNames" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.endpointNames"></a>

```java
public java.util.List<java.lang.String> getEndpointNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}.

---

##### `iothubName`<sup>Required</sup> <a name="iothubName" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.iothubName"></a>

```java
public java.lang.String getIothubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.timeouts"></a>

```java
public IothubFallbackRouteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#timeouts IothubFallbackRouteA#timeouts}

---

### IothubFallbackRouteTimeouts <a name="IothubFallbackRouteTimeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteTimeouts;

IothubFallbackRouteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#create IothubFallbackRouteA#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#delete IothubFallbackRouteA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#read IothubFallbackRouteA#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#update IothubFallbackRouteA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#create IothubFallbackRouteA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#delete IothubFallbackRouteA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#read IothubFallbackRouteA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.99.0/docs/resources/iothub_fallback_route#update IothubFallbackRouteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubFallbackRouteTimeoutsOutputReference <a name="IothubFallbackRouteTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_fallback_route.IothubFallbackRouteTimeoutsOutputReference;

new IothubFallbackRouteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

---



