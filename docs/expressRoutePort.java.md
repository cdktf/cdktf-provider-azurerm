# `expressRoutePort` Submodule <a name="`expressRoutePort` Submodule" id="@cdktf/provider-azurerm.expressRoutePort"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRoutePort <a name="ExpressRoutePort" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port azurerm_express_route_port}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePort;

ExpressRoutePort.Builder.create(Construct scope, java.lang.String id)
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
    .bandwidthInGbps(java.lang.Number)
    .encapsulation(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .peeringLocation(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .billingType(java.lang.String)
//  .id(java.lang.String)
//  .identity(ExpressRoutePortIdentity)
//  .link1(ExpressRoutePortLink1)
//  .link2(ExpressRoutePortLink2)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ExpressRoutePortTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.bandwidthInGbps">bandwidthInGbps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.encapsulation">encapsulation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#location ExpressRoutePort#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#name ExpressRoutePort#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.peeringLocation">peeringLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.billingType">billingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#id ExpressRoutePort#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | link1 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | link2 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidthInGbps`<sup>Required</sup> <a name="bandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.bandwidthInGbps"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}.

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.encapsulation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#location ExpressRoutePort#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#name ExpressRoutePort#name}.

---

##### `peeringLocation`<sup>Required</sup> <a name="peeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.peeringLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}.

---

##### `billingType`<sup>Optional</sup> <a name="billingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.billingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#id ExpressRoutePort#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#identity ExpressRoutePort#identity}

---

##### `link1`<sup>Optional</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link1"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

link1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#link1 ExpressRoutePort#link1}

---

##### `link2`<sup>Optional</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.link2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

link2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#link2 ExpressRoutePort#link2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#timeouts ExpressRoutePort#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1">putLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2">putLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType">resetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1">resetLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2">resetLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity"></a>

```java
public void putIdentity(ExpressRoutePortIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `putLink1` <a name="putLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1"></a>

```java
public void putLink1(ExpressRoutePortLink1 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `putLink2` <a name="putLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2"></a>

```java
public void putLink2(ExpressRoutePortLink2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putLink2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts"></a>

```java
public void putTimeouts(ExpressRoutePortTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---

##### `resetBillingType` <a name="resetBillingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetBillingType"></a>

```java
public void resetBillingType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLink1` <a name="resetLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink1"></a>

```java
public void resetLink1()
```

##### `resetLink2` <a name="resetLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetLink2"></a>

```java
public void resetLink2()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePort;

ExpressRoutePort.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePort;

ExpressRoutePort.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePort;

ExpressRoutePort.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePort;

ExpressRoutePort.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExpressRoutePort.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ExpressRoutePort resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExpressRoutePort to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExpressRoutePort that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRoutePort to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype">ethertype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu">mtu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput">bandwidthInGbpsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput">billingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput">encapsulationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input">link1Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input">link2Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput">peeringLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps">bandwidthInGbps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType">billingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation">encapsulation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation">peeringLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ethertype`<sup>Required</sup> <a name="ethertype" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.ethertype"></a>

```java
public java.lang.String getEthertype();
```

- *Type:* java.lang.String

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identity"></a>

```java
public ExpressRoutePortIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference">ExpressRoutePortIdentityOutputReference</a>

---

##### `link1`<sup>Required</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1"></a>

```java
public ExpressRoutePortLink1OutputReference getLink1();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference">ExpressRoutePortLink1OutputReference</a>

---

##### `link2`<sup>Required</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2"></a>

```java
public ExpressRoutePortLink2OutputReference getLink2();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference">ExpressRoutePortLink2OutputReference</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.mtu"></a>

```java
public java.lang.String getMtu();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeouts"></a>

```java
public ExpressRoutePortTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference">ExpressRoutePortTimeoutsOutputReference</a>

---

##### `bandwidthInGbpsInput`<sup>Optional</sup> <a name="bandwidthInGbpsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbpsInput"></a>

```java
public java.lang.Number getBandwidthInGbpsInput();
```

- *Type:* java.lang.Number

---

##### `billingTypeInput`<sup>Optional</sup> <a name="billingTypeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingTypeInput"></a>

```java
public java.lang.String getBillingTypeInput();
```

- *Type:* java.lang.String

---

##### `encapsulationInput`<sup>Optional</sup> <a name="encapsulationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulationInput"></a>

```java
public java.lang.String getEncapsulationInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.identityInput"></a>

```java
public ExpressRoutePortIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `link1Input`<sup>Optional</sup> <a name="link1Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link1Input"></a>

```java
public ExpressRoutePortLink1 getLink1Input();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---

##### `link2Input`<sup>Optional</sup> <a name="link2Input" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.link2Input"></a>

```java
public ExpressRoutePortLink2 getLink2Input();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peeringLocationInput`<sup>Optional</sup> <a name="peeringLocationInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocationInput"></a>

```java
public java.lang.String getPeeringLocationInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---

##### `bandwidthInGbps`<sup>Required</sup> <a name="bandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.bandwidthInGbps"></a>

```java
public java.lang.Number getBandwidthInGbps();
```

- *Type:* java.lang.Number

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.billingType"></a>

```java
public java.lang.String getBillingType();
```

- *Type:* java.lang.String

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.encapsulation"></a>

```java
public java.lang.String getEncapsulation();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peeringLocation`<sup>Required</sup> <a name="peeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.peeringLocation"></a>

```java
public java.lang.String getPeeringLocation();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePort.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRoutePortConfig <a name="ExpressRoutePortConfig" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortConfig;

ExpressRoutePortConfig.builder()
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
    .bandwidthInGbps(java.lang.Number)
    .encapsulation(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .peeringLocation(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .billingType(java.lang.String)
//  .id(java.lang.String)
//  .identity(ExpressRoutePortIdentity)
//  .link1(ExpressRoutePortLink1)
//  .link2(ExpressRoutePortLink2)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ExpressRoutePortTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps">bandwidthInGbps</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation">encapsulation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#location ExpressRoutePort#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#name ExpressRoutePort#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation">peeringLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType">billingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#id ExpressRoutePort#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1">link1</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | link1 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2">link2</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | link2 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bandwidthInGbps`<sup>Required</sup> <a name="bandwidthInGbps" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.bandwidthInGbps"></a>

```java
public java.lang.Number getBandwidthInGbps();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#bandwidth_in_gbps ExpressRoutePort#bandwidth_in_gbps}.

---

##### `encapsulation`<sup>Required</sup> <a name="encapsulation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.encapsulation"></a>

```java
public java.lang.String getEncapsulation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#encapsulation ExpressRoutePort#encapsulation}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#location ExpressRoutePort#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#name ExpressRoutePort#name}.

---

##### `peeringLocation`<sup>Required</sup> <a name="peeringLocation" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.peeringLocation"></a>

```java
public java.lang.String getPeeringLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#peering_location ExpressRoutePort#peering_location}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#resource_group_name ExpressRoutePort#resource_group_name}.

---

##### `billingType`<sup>Optional</sup> <a name="billingType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.billingType"></a>

```java
public java.lang.String getBillingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#billing_type ExpressRoutePort#billing_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#id ExpressRoutePort#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.identity"></a>

```java
public ExpressRoutePortIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#identity ExpressRoutePort#identity}

---

##### `link1`<sup>Optional</sup> <a name="link1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link1"></a>

```java
public ExpressRoutePortLink1 getLink1();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

link1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#link1 ExpressRoutePort#link1}

---

##### `link2`<sup>Optional</sup> <a name="link2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.link2"></a>

```java
public ExpressRoutePortLink2 getLink2();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

link2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#link2 ExpressRoutePort#link2}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#tags ExpressRoutePort#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortConfig.property.timeouts"></a>

```java
public ExpressRoutePortTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#timeouts ExpressRoutePort#timeouts}

---

### ExpressRoutePortIdentity <a name="ExpressRoutePortIdentity" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortIdentity;

ExpressRoutePortIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#type ExpressRoutePort#type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#type ExpressRoutePort#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#identity_ids ExpressRoutePort#identity_ids}.

---

### ExpressRoutePortLink1 <a name="ExpressRoutePortLink1" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortLink1;

ExpressRoutePortLink1.builder()
//  .adminEnabled(java.lang.Boolean)
//  .adminEnabled(IResolvable)
//  .macsecCakKeyvaultSecretId(java.lang.String)
//  .macsecCipher(java.lang.String)
//  .macsecCknKeyvaultSecretId(java.lang.String)
//  .macsecSciEnabled(java.lang.Boolean)
//  .macsecSciEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher">macsecCipher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.adminEnabled"></a>

```java
public java.lang.Object getAdminEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `macsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCakKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCakKeyvaultSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `macsecCipher`<sup>Optional</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCipher"></a>

```java
public java.lang.String getMacsecCipher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `macsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecCknKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCknKeyvaultSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `macsecSciEnabled`<sup>Optional</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1.property.macsecSciEnabled"></a>

```java
public java.lang.Object getMacsecSciEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortLink2 <a name="ExpressRoutePortLink2" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortLink2;

ExpressRoutePortLink2.builder()
//  .adminEnabled(java.lang.Boolean)
//  .adminEnabled(IResolvable)
//  .macsecCakKeyvaultSecretId(java.lang.String)
//  .macsecCipher(java.lang.String)
//  .macsecCknKeyvaultSecretId(java.lang.String)
//  .macsecSciEnabled(java.lang.Boolean)
//  .macsecSciEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher">macsecCipher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}. |

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.adminEnabled"></a>

```java
public java.lang.Object getAdminEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#admin_enabled ExpressRoutePort#admin_enabled}.

---

##### `macsecCakKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCakKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCakKeyvaultSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cak_keyvault_secret_id ExpressRoutePort#macsec_cak_keyvault_secret_id}.

---

##### `macsecCipher`<sup>Optional</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCipher"></a>

```java
public java.lang.String getMacsecCipher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_cipher ExpressRoutePort#macsec_cipher}.

---

##### `macsecCknKeyvaultSecretId`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecCknKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCknKeyvaultSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_ckn_keyvault_secret_id ExpressRoutePort#macsec_ckn_keyvault_secret_id}.

---

##### `macsecSciEnabled`<sup>Optional</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2.property.macsecSciEnabled"></a>

```java
public java.lang.Object getMacsecSciEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#macsec_sci_enabled ExpressRoutePort#macsec_sci_enabled}.

---

### ExpressRoutePortTimeouts <a name="ExpressRoutePortTimeouts" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortTimeouts;

ExpressRoutePortTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#create ExpressRoutePort#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#read ExpressRoutePort#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#update ExpressRoutePort#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#create ExpressRoutePort#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#delete ExpressRoutePort#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#read ExpressRoutePort#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/express_route_port#update ExpressRoutePort#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRoutePortIdentityOutputReference <a name="ExpressRoutePortIdentityOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortIdentityOutputReference;

new ExpressRoutePortIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentityOutputReference.property.internalValue"></a>

```java
public ExpressRoutePortIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortIdentity">ExpressRoutePortIdentity</a>

---


### ExpressRoutePortLink1OutputReference <a name="ExpressRoutePortLink1OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortLink1OutputReference;

new ExpressRoutePortLink1OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId">resetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher">resetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId">resetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled">resetMacsecSciEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetAdminEnabled"></a>

```java
public void resetAdminEnabled()
```

##### `resetMacsecCakKeyvaultSecretId` <a name="resetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```java
public void resetMacsecCakKeyvaultSecretId()
```

##### `resetMacsecCipher` <a name="resetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCipher"></a>

```java
public void resetMacsecCipher()
```

##### `resetMacsecCknKeyvaultSecretId` <a name="resetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```java
public void resetMacsecCknKeyvaultSecretId()
```

##### `resetMacsecSciEnabled` <a name="resetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.resetMacsecSciEnabled"></a>

```java
public void resetMacsecSciEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId">patchPanelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId">rackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName">routerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput">adminEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput">macsecCakKeyvaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput">macsecCipherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput">macsecCknKeyvaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput">macsecSciEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher">macsecCipher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `patchPanelId`<sup>Required</sup> <a name="patchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.patchPanelId"></a>

```java
public java.lang.String getPatchPanelId();
```

- *Type:* java.lang.String

---

##### `rackId`<sup>Required</sup> <a name="rackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.rackId"></a>

```java
public java.lang.String getRackId();
```

- *Type:* java.lang.String

---

##### `routerName`<sup>Required</sup> <a name="routerName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.routerName"></a>

```java
public java.lang.String getRouterName();
```

- *Type:* java.lang.String

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabledInput"></a>

```java
public java.lang.Object getAdminEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```java
public java.lang.String getMacsecCakKeyvaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `macsecCipherInput`<sup>Optional</sup> <a name="macsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipherInput"></a>

```java
public java.lang.String getMacsecCipherInput();
```

- *Type:* java.lang.String

---

##### `macsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```java
public java.lang.String getMacsecCknKeyvaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `macsecSciEnabledInput`<sup>Optional</sup> <a name="macsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabledInput"></a>

```java
public java.lang.Object getMacsecSciEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.adminEnabled"></a>

```java
public java.lang.Object getAdminEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretId`<sup>Required</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCakKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCakKeyvaultSecretId();
```

- *Type:* java.lang.String

---

##### `macsecCipher`<sup>Required</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCipher"></a>

```java
public java.lang.String getMacsecCipher();
```

- *Type:* java.lang.String

---

##### `macsecCknKeyvaultSecretId`<sup>Required</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecCknKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCknKeyvaultSecretId();
```

- *Type:* java.lang.String

---

##### `macsecSciEnabled`<sup>Required</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.macsecSciEnabled"></a>

```java
public java.lang.Object getMacsecSciEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1OutputReference.property.internalValue"></a>

```java
public ExpressRoutePortLink1 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink1">ExpressRoutePortLink1</a>

---


### ExpressRoutePortLink2OutputReference <a name="ExpressRoutePortLink2OutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortLink2OutputReference;

new ExpressRoutePortLink2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId">resetMacsecCakKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher">resetMacsecCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId">resetMacsecCknKeyvaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled">resetMacsecSciEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetAdminEnabled"></a>

```java
public void resetAdminEnabled()
```

##### `resetMacsecCakKeyvaultSecretId` <a name="resetMacsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCakKeyvaultSecretId"></a>

```java
public void resetMacsecCakKeyvaultSecretId()
```

##### `resetMacsecCipher` <a name="resetMacsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCipher"></a>

```java
public void resetMacsecCipher()
```

##### `resetMacsecCknKeyvaultSecretId` <a name="resetMacsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecCknKeyvaultSecretId"></a>

```java
public void resetMacsecCknKeyvaultSecretId()
```

##### `resetMacsecSciEnabled` <a name="resetMacsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.resetMacsecSciEnabled"></a>

```java
public void resetMacsecSciEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId">patchPanelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId">rackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName">routerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput">adminEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput">macsecCakKeyvaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput">macsecCipherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput">macsecCknKeyvaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput">macsecSciEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId">macsecCakKeyvaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher">macsecCipher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId">macsecCknKeyvaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled">macsecSciEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `patchPanelId`<sup>Required</sup> <a name="patchPanelId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.patchPanelId"></a>

```java
public java.lang.String getPatchPanelId();
```

- *Type:* java.lang.String

---

##### `rackId`<sup>Required</sup> <a name="rackId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.rackId"></a>

```java
public java.lang.String getRackId();
```

- *Type:* java.lang.String

---

##### `routerName`<sup>Required</sup> <a name="routerName" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.routerName"></a>

```java
public java.lang.String getRouterName();
```

- *Type:* java.lang.String

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabledInput"></a>

```java
public java.lang.Object getAdminEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCakKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretIdInput"></a>

```java
public java.lang.String getMacsecCakKeyvaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `macsecCipherInput`<sup>Optional</sup> <a name="macsecCipherInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipherInput"></a>

```java
public java.lang.String getMacsecCipherInput();
```

- *Type:* java.lang.String

---

##### `macsecCknKeyvaultSecretIdInput`<sup>Optional</sup> <a name="macsecCknKeyvaultSecretIdInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretIdInput"></a>

```java
public java.lang.String getMacsecCknKeyvaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `macsecSciEnabledInput`<sup>Optional</sup> <a name="macsecSciEnabledInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabledInput"></a>

```java
public java.lang.Object getMacsecSciEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.adminEnabled"></a>

```java
public java.lang.Object getAdminEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macsecCakKeyvaultSecretId`<sup>Required</sup> <a name="macsecCakKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCakKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCakKeyvaultSecretId();
```

- *Type:* java.lang.String

---

##### `macsecCipher`<sup>Required</sup> <a name="macsecCipher" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCipher"></a>

```java
public java.lang.String getMacsecCipher();
```

- *Type:* java.lang.String

---

##### `macsecCknKeyvaultSecretId`<sup>Required</sup> <a name="macsecCknKeyvaultSecretId" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecCknKeyvaultSecretId"></a>

```java
public java.lang.String getMacsecCknKeyvaultSecretId();
```

- *Type:* java.lang.String

---

##### `macsecSciEnabled`<sup>Required</sup> <a name="macsecSciEnabled" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.macsecSciEnabled"></a>

```java
public java.lang.Object getMacsecSciEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2OutputReference.property.internalValue"></a>

```java
public ExpressRoutePortLink2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortLink2">ExpressRoutePortLink2</a>

---


### ExpressRoutePortTimeoutsOutputReference <a name="ExpressRoutePortTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_port.ExpressRoutePortTimeoutsOutputReference;

new ExpressRoutePortTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRoutePort.ExpressRoutePortTimeouts">ExpressRoutePortTimeouts</a>

---



