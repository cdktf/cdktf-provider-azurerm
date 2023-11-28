# `expressRouteCircuitConnection` Submodule <a name="`expressRouteCircuitConnection` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuitConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuitConnection <a name="ExpressRouteCircuitConnection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection azurerm_express_route_circuit_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnection;

ExpressRouteCircuitConnection.Builder.create(Construct scope, java.lang.String id)
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
    .addressPrefixIpv4(java.lang.String)
    .name(java.lang.String)
    .peeringId(java.lang.String)
    .peerPeeringId(java.lang.String)
//  .addressPrefixIpv6(java.lang.String)
//  .authorizationKey(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExpressRouteCircuitConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv4">addressPrefixIpv4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peeringId">peeringId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peerPeeringId">peerPeeringId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv6">addressPrefixIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressPrefixIpv4`<sup>Required</sup> <a name="addressPrefixIpv4" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv4"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}.

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peeringId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}.

---

##### `peerPeeringId`<sup>Required</sup> <a name="peerPeeringId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peerPeeringId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}.

---

##### `addressPrefixIpv6`<sup>Optional</sup> <a name="addressPrefixIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv6"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}.

---

##### `authorizationKey`<sup>Optional</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.authorizationKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#timeouts ExpressRouteCircuitConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAddressPrefixIpv6">resetAddressPrefixIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAuthorizationKey">resetAuthorizationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts"></a>

```java
public void putTimeouts(ExpressRouteCircuitConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>

---

##### `resetAddressPrefixIpv6` <a name="resetAddressPrefixIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAddressPrefixIpv6"></a>

```java
public void resetAddressPrefixIpv6()
```

##### `resetAuthorizationKey` <a name="resetAuthorizationKey" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAuthorizationKey"></a>

```java
public void resetAuthorizationKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRouteCircuitConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnection;

ExpressRouteCircuitConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnection;

ExpressRouteCircuitConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnection;

ExpressRouteCircuitConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnection;

ExpressRouteCircuitConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExpressRouteCircuitConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ExpressRouteCircuitConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExpressRouteCircuitConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExpressRouteCircuitConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteCircuitConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference">ExpressRouteCircuitConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4Input">addressPrefixIpv4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6Input">addressPrefixIpv6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKeyInput">authorizationKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringIdInput">peeringIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringIdInput">peerPeeringIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4">addressPrefixIpv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6">addressPrefixIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringId">peeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringId">peerPeeringId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeouts"></a>

```java
public ExpressRouteCircuitConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference">ExpressRouteCircuitConnectionTimeoutsOutputReference</a>

---

##### `addressPrefixIpv4Input`<sup>Optional</sup> <a name="addressPrefixIpv4Input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4Input"></a>

```java
public java.lang.String getAddressPrefixIpv4Input();
```

- *Type:* java.lang.String

---

##### `addressPrefixIpv6Input`<sup>Optional</sup> <a name="addressPrefixIpv6Input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6Input"></a>

```java
public java.lang.String getAddressPrefixIpv6Input();
```

- *Type:* java.lang.String

---

##### `authorizationKeyInput`<sup>Optional</sup> <a name="authorizationKeyInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKeyInput"></a>

```java
public java.lang.String getAuthorizationKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peeringIdInput`<sup>Optional</sup> <a name="peeringIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringIdInput"></a>

```java
public java.lang.String getPeeringIdInput();
```

- *Type:* java.lang.String

---

##### `peerPeeringIdInput`<sup>Optional</sup> <a name="peerPeeringIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringIdInput"></a>

```java
public java.lang.String getPeerPeeringIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>

---

##### `addressPrefixIpv4`<sup>Required</sup> <a name="addressPrefixIpv4" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4"></a>

```java
public java.lang.String getAddressPrefixIpv4();
```

- *Type:* java.lang.String

---

##### `addressPrefixIpv6`<sup>Required</sup> <a name="addressPrefixIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6"></a>

```java
public java.lang.String getAddressPrefixIpv6();
```

- *Type:* java.lang.String

---

##### `authorizationKey`<sup>Required</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKey"></a>

```java
public java.lang.String getAuthorizationKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringId"></a>

```java
public java.lang.String getPeeringId();
```

- *Type:* java.lang.String

---

##### `peerPeeringId`<sup>Required</sup> <a name="peerPeeringId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringId"></a>

```java
public java.lang.String getPeerPeeringId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitConnectionConfig <a name="ExpressRouteCircuitConnectionConfig" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnectionConfig;

ExpressRouteCircuitConnectionConfig.builder()
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
    .addressPrefixIpv4(java.lang.String)
    .name(java.lang.String)
    .peeringId(java.lang.String)
    .peerPeeringId(java.lang.String)
//  .addressPrefixIpv6(java.lang.String)
//  .authorizationKey(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExpressRouteCircuitConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv4">addressPrefixIpv4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peeringId">peeringId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peerPeeringId">peerPeeringId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv6">addressPrefixIpv6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.authorizationKey">authorizationKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressPrefixIpv4`<sup>Required</sup> <a name="addressPrefixIpv4" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv4"></a>

```java
public java.lang.String getAddressPrefixIpv4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}.

---

##### `peeringId`<sup>Required</sup> <a name="peeringId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peeringId"></a>

```java
public java.lang.String getPeeringId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}.

---

##### `peerPeeringId`<sup>Required</sup> <a name="peerPeeringId" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peerPeeringId"></a>

```java
public java.lang.String getPeerPeeringId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}.

---

##### `addressPrefixIpv6`<sup>Optional</sup> <a name="addressPrefixIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv6"></a>

```java
public java.lang.String getAddressPrefixIpv6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}.

---

##### `authorizationKey`<sup>Optional</sup> <a name="authorizationKey" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.authorizationKey"></a>

```java
public java.lang.String getAuthorizationKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.timeouts"></a>

```java
public ExpressRouteCircuitConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#timeouts ExpressRouteCircuitConnection#timeouts}

---

### ExpressRouteCircuitConnectionTimeouts <a name="ExpressRouteCircuitConnectionTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnectionTimeouts;

ExpressRouteCircuitConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#create ExpressRouteCircuitConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#delete ExpressRouteCircuitConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#read ExpressRouteCircuitConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#update ExpressRouteCircuitConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#create ExpressRouteCircuitConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#delete ExpressRouteCircuitConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#read ExpressRouteCircuitConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/express_route_circuit_connection#update ExpressRouteCircuitConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitConnectionTimeoutsOutputReference <a name="ExpressRouteCircuitConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.express_route_circuit_connection.ExpressRouteCircuitConnectionTimeoutsOutputReference;

new ExpressRouteCircuitConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>

---



