# `virtualNetworkGatewayConnection` Submodule <a name="`virtualNetworkGatewayConnection` Submodule" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGatewayConnection <a name="VirtualNetworkGatewayConnection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection azurerm_virtual_network_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnection(Construct Scope, string Id, VirtualNetworkGatewayConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig">VirtualNetworkGatewayConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig">VirtualNetworkGatewayConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses">PutCustomBgpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy">PutIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy">PutTrafficSelectorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey">ResetAuthorizationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionMode">ResetConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionProtocol">ResetConnectionProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetCustomBgpAddresses">ResetCustomBgpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetDpdTimeoutSeconds">ResetDpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEgressNatRuleIds">ResetEgressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp">ResetEnableBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId">ResetExpressRouteCircuitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteGatewayBypass">ResetExpressRouteGatewayBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIngressNatRuleIds">ResetIngressNatRuleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy">ResetIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalAzureIpAddressEnabled">ResetLocalAzureIpAddressEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId">ResetLocalNetworkGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId">ResetPeerVirtualNetworkGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight">ResetRoutingWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey">ResetSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTrafficSelectorPolicy">ResetTrafficSelectorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors">ResetUsePolicyBasedTrafficSelectors</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomBgpAddresses` <a name="PutCustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses"></a>

```csharp
private void PutCustomBgpAddresses(VirtualNetworkGatewayConnectionCustomBgpAddresses Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putCustomBgpAddresses.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---

##### `PutIpsecPolicy` <a name="PutIpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy"></a>

```csharp
private void PutIpsecPolicy(VirtualNetworkGatewayConnectionIpsecPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putIpsecPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualNetworkGatewayConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

---

##### `PutTrafficSelectorPolicy` <a name="PutTrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy"></a>

```csharp
private void PutTrafficSelectorPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.putTrafficSelectorPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetAuthorizationKey` <a name="ResetAuthorizationKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetAuthorizationKey"></a>

```csharp
private void ResetAuthorizationKey()
```

##### `ResetConnectionMode` <a name="ResetConnectionMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionMode"></a>

```csharp
private void ResetConnectionMode()
```

##### `ResetConnectionProtocol` <a name="ResetConnectionProtocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetConnectionProtocol"></a>

```csharp
private void ResetConnectionProtocol()
```

##### `ResetCustomBgpAddresses` <a name="ResetCustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetCustomBgpAddresses"></a>

```csharp
private void ResetCustomBgpAddresses()
```

##### `ResetDpdTimeoutSeconds` <a name="ResetDpdTimeoutSeconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetDpdTimeoutSeconds"></a>

```csharp
private void ResetDpdTimeoutSeconds()
```

##### `ResetEgressNatRuleIds` <a name="ResetEgressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEgressNatRuleIds"></a>

```csharp
private void ResetEgressNatRuleIds()
```

##### `ResetEnableBgp` <a name="ResetEnableBgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetEnableBgp"></a>

```csharp
private void ResetEnableBgp()
```

##### `ResetExpressRouteCircuitId` <a name="ResetExpressRouteCircuitId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteCircuitId"></a>

```csharp
private void ResetExpressRouteCircuitId()
```

##### `ResetExpressRouteGatewayBypass` <a name="ResetExpressRouteGatewayBypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetExpressRouteGatewayBypass"></a>

```csharp
private void ResetExpressRouteGatewayBypass()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngressNatRuleIds` <a name="ResetIngressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIngressNatRuleIds"></a>

```csharp
private void ResetIngressNatRuleIds()
```

##### `ResetIpsecPolicy` <a name="ResetIpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetIpsecPolicy"></a>

```csharp
private void ResetIpsecPolicy()
```

##### `ResetLocalAzureIpAddressEnabled` <a name="ResetLocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalAzureIpAddressEnabled"></a>

```csharp
private void ResetLocalAzureIpAddressEnabled()
```

##### `ResetLocalNetworkGatewayId` <a name="ResetLocalNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetLocalNetworkGatewayId"></a>

```csharp
private void ResetLocalNetworkGatewayId()
```

##### `ResetPeerVirtualNetworkGatewayId` <a name="ResetPeerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetPeerVirtualNetworkGatewayId"></a>

```csharp
private void ResetPeerVirtualNetworkGatewayId()
```

##### `ResetRoutingWeight` <a name="ResetRoutingWeight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetRoutingWeight"></a>

```csharp
private void ResetRoutingWeight()
```

##### `ResetSharedKey` <a name="ResetSharedKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetSharedKey"></a>

```csharp
private void ResetSharedKey()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficSelectorPolicy` <a name="ResetTrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetTrafficSelectorPolicy"></a>

```csharp
private void ResetTrafficSelectorPolicy()
```

##### `ResetUsePolicyBasedTrafficSelectors` <a name="ResetUsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.resetUsePolicyBasedTrafficSelectors"></a>

```csharp
private void ResetUsePolicyBasedTrafficSelectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualNetworkGatewayConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualNetworkGatewayConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualNetworkGatewayConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualNetworkGatewayConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualNetworkGatewayConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualNetworkGatewayConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualNetworkGatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddresses">CustomBgpAddresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference">VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicy">TrafficSelectorPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList">VirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput">AuthorizationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionModeInput">ConnectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocolInput">ConnectionProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddressesInput">CustomBgpAddressesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSecondsInput">DpdTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIdsInput">EgressNatRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput">EnableBgpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput">ExpressRouteCircuitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypassInput">ExpressRouteGatewayBypassInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIdsInput">IngressNatRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput">IpsecPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabledInput">LocalAzureIpAddressEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput">LocalNetworkGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput">PeerVirtualNetworkGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput">RoutingWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput">SharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicyInput">TrafficSelectorPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput">UsePolicyBasedTrafficSelectorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput">VirtualNetworkGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey">AuthorizationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionMode">ConnectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocol">ConnectionProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIds">EgressNatRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp">EnableBgp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId">ExpressRouteCircuitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypass">ExpressRouteGatewayBypass</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIds">IngressNatRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled">LocalAzureIpAddressEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId">LocalNetworkGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId">PeerVirtualNetworkGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight">RoutingWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey">SharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors">UsePolicyBasedTrafficSelectors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomBgpAddresses`<sup>Required</sup> <a name="CustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddresses"></a>

```csharp
public VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference CustomBgpAddresses { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference">VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference</a>

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicy"></a>

```csharp
public VirtualNetworkGatewayConnectionIpsecPolicyOutputReference IpsecPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference">VirtualNetworkGatewayConnectionIpsecPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeouts"></a>

```csharp
public VirtualNetworkGatewayConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference">VirtualNetworkGatewayConnectionTimeoutsOutputReference</a>

---

##### `TrafficSelectorPolicy`<sup>Required</sup> <a name="TrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicy"></a>

```csharp
public VirtualNetworkGatewayConnectionTrafficSelectorPolicyList TrafficSelectorPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList">VirtualNetworkGatewayConnectionTrafficSelectorPolicyList</a>

---

##### `AuthorizationKeyInput`<sup>Optional</sup> <a name="AuthorizationKeyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKeyInput"></a>

```csharp
public string AuthorizationKeyInput { get; }
```

- *Type:* string

---

##### `ConnectionModeInput`<sup>Optional</sup> <a name="ConnectionModeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionModeInput"></a>

```csharp
public string ConnectionModeInput { get; }
```

- *Type:* string

---

##### `ConnectionProtocolInput`<sup>Optional</sup> <a name="ConnectionProtocolInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocolInput"></a>

```csharp
public string ConnectionProtocolInput { get; }
```

- *Type:* string

---

##### `CustomBgpAddressesInput`<sup>Optional</sup> <a name="CustomBgpAddressesInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.customBgpAddressesInput"></a>

```csharp
public VirtualNetworkGatewayConnectionCustomBgpAddresses CustomBgpAddressesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---

##### `DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="DpdTimeoutSecondsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSecondsInput"></a>

```csharp
public double DpdTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `EgressNatRuleIdsInput`<sup>Optional</sup> <a name="EgressNatRuleIdsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIdsInput"></a>

```csharp
public string[] EgressNatRuleIdsInput { get; }
```

- *Type:* string[]

---

##### `EnableBgpInput`<sup>Optional</sup> <a name="EnableBgpInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgpInput"></a>

```csharp
public object EnableBgpInput { get; }
```

- *Type:* object

---

##### `ExpressRouteCircuitIdInput`<sup>Optional</sup> <a name="ExpressRouteCircuitIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitIdInput"></a>

```csharp
public string ExpressRouteCircuitIdInput { get; }
```

- *Type:* string

---

##### `ExpressRouteGatewayBypassInput`<sup>Optional</sup> <a name="ExpressRouteGatewayBypassInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypassInput"></a>

```csharp
public object ExpressRouteGatewayBypassInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressNatRuleIdsInput`<sup>Optional</sup> <a name="IngressNatRuleIdsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIdsInput"></a>

```csharp
public string[] IngressNatRuleIdsInput { get; }
```

- *Type:* string[]

---

##### `IpsecPolicyInput`<sup>Optional</sup> <a name="IpsecPolicyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ipsecPolicyInput"></a>

```csharp
public VirtualNetworkGatewayConnectionIpsecPolicy IpsecPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---

##### `LocalAzureIpAddressEnabledInput`<sup>Optional</sup> <a name="LocalAzureIpAddressEnabledInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabledInput"></a>

```csharp
public object LocalAzureIpAddressEnabledInput { get; }
```

- *Type:* object

---

##### `LocalNetworkGatewayIdInput`<sup>Optional</sup> <a name="LocalNetworkGatewayIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayIdInput"></a>

```csharp
public string LocalNetworkGatewayIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeerVirtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="PeerVirtualNetworkGatewayIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayIdInput"></a>

```csharp
public string PeerVirtualNetworkGatewayIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RoutingWeightInput`<sup>Optional</sup> <a name="RoutingWeightInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeightInput"></a>

```csharp
public double RoutingWeightInput { get; }
```

- *Type:* double

---

##### `SharedKeyInput`<sup>Optional</sup> <a name="SharedKeyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKeyInput"></a>

```csharp
public string SharedKeyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrafficSelectorPolicyInput`<sup>Optional</sup> <a name="TrafficSelectorPolicyInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.trafficSelectorPolicyInput"></a>

```csharp
public object TrafficSelectorPolicyInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsePolicyBasedTrafficSelectorsInput`<sup>Optional</sup> <a name="UsePolicyBasedTrafficSelectorsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectorsInput"></a>

```csharp
public object UsePolicyBasedTrafficSelectorsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="VirtualNetworkGatewayIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayIdInput"></a>

```csharp
public string VirtualNetworkGatewayIdInput { get; }
```

- *Type:* string

---

##### `AuthorizationKey`<sup>Required</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.authorizationKey"></a>

```csharp
public string AuthorizationKey { get; }
```

- *Type:* string

---

##### `ConnectionMode`<sup>Required</sup> <a name="ConnectionMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionMode"></a>

```csharp
public string ConnectionMode { get; }
```

- *Type:* string

---

##### `ConnectionProtocol`<sup>Required</sup> <a name="ConnectionProtocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.connectionProtocol"></a>

```csharp
public string ConnectionProtocol { get; }
```

- *Type:* string

---

##### `DpdTimeoutSeconds`<sup>Required</sup> <a name="DpdTimeoutSeconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.dpdTimeoutSeconds"></a>

```csharp
public double DpdTimeoutSeconds { get; }
```

- *Type:* double

---

##### `EgressNatRuleIds`<sup>Required</sup> <a name="EgressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.egressNatRuleIds"></a>

```csharp
public string[] EgressNatRuleIds { get; }
```

- *Type:* string[]

---

##### `EnableBgp`<sup>Required</sup> <a name="EnableBgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.enableBgp"></a>

```csharp
public object EnableBgp { get; }
```

- *Type:* object

---

##### `ExpressRouteCircuitId`<sup>Required</sup> <a name="ExpressRouteCircuitId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteCircuitId"></a>

```csharp
public string ExpressRouteCircuitId { get; }
```

- *Type:* string

---

##### `ExpressRouteGatewayBypass`<sup>Required</sup> <a name="ExpressRouteGatewayBypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.expressRouteGatewayBypass"></a>

```csharp
public object ExpressRouteGatewayBypass { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngressNatRuleIds`<sup>Required</sup> <a name="IngressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.ingressNatRuleIds"></a>

```csharp
public string[] IngressNatRuleIds { get; }
```

- *Type:* string[]

---

##### `LocalAzureIpAddressEnabled`<sup>Required</sup> <a name="LocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localAzureIpAddressEnabled"></a>

```csharp
public object LocalAzureIpAddressEnabled { get; }
```

- *Type:* object

---

##### `LocalNetworkGatewayId`<sup>Required</sup> <a name="LocalNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.localNetworkGatewayId"></a>

```csharp
public string LocalNetworkGatewayId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerVirtualNetworkGatewayId`<sup>Required</sup> <a name="PeerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.peerVirtualNetworkGatewayId"></a>

```csharp
public string PeerVirtualNetworkGatewayId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RoutingWeight`<sup>Required</sup> <a name="RoutingWeight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.routingWeight"></a>

```csharp
public double RoutingWeight { get; }
```

- *Type:* double

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.sharedKey"></a>

```csharp
public string SharedKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsePolicyBasedTrafficSelectors`<sup>Required</sup> <a name="UsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.usePolicyBasedTrafficSelectors"></a>

```csharp
public object UsePolicyBasedTrafficSelectors { get; }
```

- *Type:* object

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.virtualNetworkGatewayId"></a>

```csharp
public string VirtualNetworkGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayConnectionConfig <a name="VirtualNetworkGatewayConnectionConfig" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string Type,
    string VirtualNetworkGatewayId,
    string AuthorizationKey = null,
    string ConnectionMode = null,
    string ConnectionProtocol = null,
    VirtualNetworkGatewayConnectionCustomBgpAddresses CustomBgpAddresses = null,
    double DpdTimeoutSeconds = null,
    string[] EgressNatRuleIds = null,
    object EnableBgp = null,
    string ExpressRouteCircuitId = null,
    object ExpressRouteGatewayBypass = null,
    string Id = null,
    string[] IngressNatRuleIds = null,
    VirtualNetworkGatewayConnectionIpsecPolicy IpsecPolicy = null,
    object LocalAzureIpAddressEnabled = null,
    string LocalNetworkGatewayId = null,
    string PeerVirtualNetworkGatewayId = null,
    double RoutingWeight = null,
    string SharedKey = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VirtualNetworkGatewayConnectionTimeouts Timeouts = null,
    object TrafficSelectorPolicy = null,
    object UsePolicyBasedTrafficSelectors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey">AuthorizationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionMode">ConnectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionProtocol">ConnectionProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.customBgpAddresses">CustomBgpAddresses</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | custom_bgp_addresses block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dpdTimeoutSeconds">DpdTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.egressNatRuleIds">EgressNatRuleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp">EnableBgp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId">ExpressRouteCircuitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteGatewayBypass">ExpressRouteGatewayBypass</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ingressNatRuleIds">IngressNatRuleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localAzureIpAddressEnabled">LocalAzureIpAddressEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId">LocalNetworkGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId">PeerVirtualNetworkGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight">RoutingWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey">SharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.trafficSelectorPolicy">TrafficSelectorPolicy</a></code> | <code>object</code> | traffic_selector_policy block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors">UsePolicyBasedTrafficSelectors</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#location VirtualNetworkGatewayConnection#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#name VirtualNetworkGatewayConnection#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#resource_group_name VirtualNetworkGatewayConnection#resource_group_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#type VirtualNetworkGatewayConnection#type}.

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.virtualNetworkGatewayId"></a>

```csharp
public string VirtualNetworkGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#virtual_network_gateway_id VirtualNetworkGatewayConnection#virtual_network_gateway_id}.

---

##### `AuthorizationKey`<sup>Optional</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.authorizationKey"></a>

```csharp
public string AuthorizationKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#authorization_key VirtualNetworkGatewayConnection#authorization_key}.

---

##### `ConnectionMode`<sup>Optional</sup> <a name="ConnectionMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionMode"></a>

```csharp
public string ConnectionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#connection_mode VirtualNetworkGatewayConnection#connection_mode}.

---

##### `ConnectionProtocol`<sup>Optional</sup> <a name="ConnectionProtocol" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.connectionProtocol"></a>

```csharp
public string ConnectionProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#connection_protocol VirtualNetworkGatewayConnection#connection_protocol}.

---

##### `CustomBgpAddresses`<sup>Optional</sup> <a name="CustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.customBgpAddresses"></a>

```csharp
public VirtualNetworkGatewayConnectionCustomBgpAddresses CustomBgpAddresses { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

custom_bgp_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#custom_bgp_addresses VirtualNetworkGatewayConnection#custom_bgp_addresses}

---

##### `DpdTimeoutSeconds`<sup>Optional</sup> <a name="DpdTimeoutSeconds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.dpdTimeoutSeconds"></a>

```csharp
public double DpdTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#dpd_timeout_seconds VirtualNetworkGatewayConnection#dpd_timeout_seconds}.

---

##### `EgressNatRuleIds`<sup>Optional</sup> <a name="EgressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.egressNatRuleIds"></a>

```csharp
public string[] EgressNatRuleIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#egress_nat_rule_ids VirtualNetworkGatewayConnection#egress_nat_rule_ids}.

---

##### `EnableBgp`<sup>Optional</sup> <a name="EnableBgp" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.enableBgp"></a>

```csharp
public object EnableBgp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#enable_bgp VirtualNetworkGatewayConnection#enable_bgp}.

---

##### `ExpressRouteCircuitId`<sup>Optional</sup> <a name="ExpressRouteCircuitId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteCircuitId"></a>

```csharp
public string ExpressRouteCircuitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#express_route_circuit_id VirtualNetworkGatewayConnection#express_route_circuit_id}.

---

##### `ExpressRouteGatewayBypass`<sup>Optional</sup> <a name="ExpressRouteGatewayBypass" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.expressRouteGatewayBypass"></a>

```csharp
public object ExpressRouteGatewayBypass { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#express_route_gateway_bypass VirtualNetworkGatewayConnection#express_route_gateway_bypass}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#id VirtualNetworkGatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressNatRuleIds`<sup>Optional</sup> <a name="IngressNatRuleIds" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ingressNatRuleIds"></a>

```csharp
public string[] IngressNatRuleIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ingress_nat_rule_ids VirtualNetworkGatewayConnection#ingress_nat_rule_ids}.

---

##### `IpsecPolicy`<sup>Optional</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.ipsecPolicy"></a>

```csharp
public VirtualNetworkGatewayConnectionIpsecPolicy IpsecPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ipsec_policy VirtualNetworkGatewayConnection#ipsec_policy}

---

##### `LocalAzureIpAddressEnabled`<sup>Optional</sup> <a name="LocalAzureIpAddressEnabled" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localAzureIpAddressEnabled"></a>

```csharp
public object LocalAzureIpAddressEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#local_azure_ip_address_enabled VirtualNetworkGatewayConnection#local_azure_ip_address_enabled}.

---

##### `LocalNetworkGatewayId`<sup>Optional</sup> <a name="LocalNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.localNetworkGatewayId"></a>

```csharp
public string LocalNetworkGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#local_network_gateway_id VirtualNetworkGatewayConnection#local_network_gateway_id}.

---

##### `PeerVirtualNetworkGatewayId`<sup>Optional</sup> <a name="PeerVirtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.peerVirtualNetworkGatewayId"></a>

```csharp
public string PeerVirtualNetworkGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#peer_virtual_network_gateway_id VirtualNetworkGatewayConnection#peer_virtual_network_gateway_id}.

---

##### `RoutingWeight`<sup>Optional</sup> <a name="RoutingWeight" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.routingWeight"></a>

```csharp
public double RoutingWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#routing_weight VirtualNetworkGatewayConnection#routing_weight}.

---

##### `SharedKey`<sup>Optional</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.sharedKey"></a>

```csharp
public string SharedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#shared_key VirtualNetworkGatewayConnection#shared_key}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#tags VirtualNetworkGatewayConnection#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.timeouts"></a>

```csharp
public VirtualNetworkGatewayConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts">VirtualNetworkGatewayConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#timeouts VirtualNetworkGatewayConnection#timeouts}

---

##### `TrafficSelectorPolicy`<sup>Optional</sup> <a name="TrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.trafficSelectorPolicy"></a>

```csharp
public object TrafficSelectorPolicy { get; set; }
```

- *Type:* object

traffic_selector_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#traffic_selector_policy VirtualNetworkGatewayConnection#traffic_selector_policy}

---

##### `UsePolicyBasedTrafficSelectors`<sup>Optional</sup> <a name="UsePolicyBasedTrafficSelectors" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionConfig.property.usePolicyBasedTrafficSelectors"></a>

```csharp
public object UsePolicyBasedTrafficSelectors { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#use_policy_based_traffic_selectors VirtualNetworkGatewayConnection#use_policy_based_traffic_selectors}.

---

### VirtualNetworkGatewayConnectionCustomBgpAddresses <a name="VirtualNetworkGatewayConnectionCustomBgpAddresses" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionCustomBgpAddresses {
    string Primary,
    string Secondary = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.primary">Primary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.secondary">Secondary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}. |

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.primary"></a>

```csharp
public string Primary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#primary VirtualNetworkGatewayConnection#primary}.

---

##### `Secondary`<sup>Optional</sup> <a name="Secondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses.property.secondary"></a>

```csharp
public string Secondary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#secondary VirtualNetworkGatewayConnection#secondary}.

---

### VirtualNetworkGatewayConnectionIpsecPolicy <a name="VirtualNetworkGatewayConnectionIpsecPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionIpsecPolicy {
    string DhGroup,
    string IkeEncryption,
    string IkeIntegrity,
    string IpsecEncryption,
    string IpsecIntegrity,
    string PfsGroup,
    double SaDatasize = null,
    double SaLifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup">DhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption">IkeEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity">IkeIntegrity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption">IpsecEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup">PfsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize">SaDatasize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime">SaLifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}. |

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.dhGroup"></a>

```csharp
public string DhGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#dh_group VirtualNetworkGatewayConnection#dh_group}.

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeEncryption"></a>

```csharp
public string IkeEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ike_encryption VirtualNetworkGatewayConnection#ike_encryption}.

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ikeIntegrity"></a>

```csharp
public string IkeIntegrity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ike_integrity VirtualNetworkGatewayConnection#ike_integrity}.

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecEncryption"></a>

```csharp
public string IpsecEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ipsec_encryption VirtualNetworkGatewayConnection#ipsec_encryption}.

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.ipsecIntegrity"></a>

```csharp
public string IpsecIntegrity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#ipsec_integrity VirtualNetworkGatewayConnection#ipsec_integrity}.

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.pfsGroup"></a>

```csharp
public string PfsGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#pfs_group VirtualNetworkGatewayConnection#pfs_group}.

---

##### `SaDatasize`<sup>Optional</sup> <a name="SaDatasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saDatasize"></a>

```csharp
public double SaDatasize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#sa_datasize VirtualNetworkGatewayConnection#sa_datasize}.

---

##### `SaLifetime`<sup>Optional</sup> <a name="SaLifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy.property.saLifetime"></a>

```csharp
public double SaLifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#sa_lifetime VirtualNetworkGatewayConnection#sa_lifetime}.

---

### VirtualNetworkGatewayConnectionTimeouts <a name="VirtualNetworkGatewayConnectionTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#create VirtualNetworkGatewayConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#delete VirtualNetworkGatewayConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#read VirtualNetworkGatewayConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#update VirtualNetworkGatewayConnection#update}.

---

### VirtualNetworkGatewayConnectionTrafficSelectorPolicy <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicy" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionTrafficSelectorPolicy {
    string[] LocalAddressCidrs,
    string[] RemoteAddressCidrs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.localAddressCidrs">LocalAddressCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.remoteAddressCidrs">RemoteAddressCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}. |

---

##### `LocalAddressCidrs`<sup>Required</sup> <a name="LocalAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.localAddressCidrs"></a>

```csharp
public string[] LocalAddressCidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#local_address_cidrs VirtualNetworkGatewayConnection#local_address_cidrs}.

---

##### `RemoteAddressCidrs`<sup>Required</sup> <a name="RemoteAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicy.property.remoteAddressCidrs"></a>

```csharp
public string[] RemoteAddressCidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/virtual_network_gateway_connection#remote_address_cidrs VirtualNetworkGatewayConnection#remote_address_cidrs}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference <a name="VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resetSecondary">ResetSecondary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondary` <a name="ResetSecondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.resetSecondary"></a>

```csharp
private void ResetSecondary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primaryInput">PrimaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondaryInput">SecondaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primary">Primary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondary">Secondary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primaryInput"></a>

```csharp
public string PrimaryInput { get; }
```

- *Type:* string

---

##### `SecondaryInput`<sup>Optional</sup> <a name="SecondaryInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondaryInput"></a>

```csharp
public string SecondaryInput { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.primary"></a>

```csharp
public string Primary { get; }
```

- *Type:* string

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.secondary"></a>

```csharp
public string Secondary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddressesOutputReference.property.internalValue"></a>

```csharp
public VirtualNetworkGatewayConnectionCustomBgpAddresses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionCustomBgpAddresses">VirtualNetworkGatewayConnectionCustomBgpAddresses</a>

---


### VirtualNetworkGatewayConnectionIpsecPolicyOutputReference <a name="VirtualNetworkGatewayConnectionIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionIpsecPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize">ResetSaDatasize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime">ResetSaLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSaDatasize` <a name="ResetSaDatasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaDatasize"></a>

```csharp
private void ResetSaDatasize()
```

##### `ResetSaLifetime` <a name="ResetSaLifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.resetSaLifetime"></a>

```csharp
private void ResetSaLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput">IkeEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput">IkeIntegrityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput">IpsecEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput">IpsecIntegrityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput">PfsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput">SaDatasizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput">SaLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize">SaDatasize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime">SaLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroupInput"></a>

```csharp
public string DhGroupInput { get; }
```

- *Type:* string

---

##### `IkeEncryptionInput`<sup>Optional</sup> <a name="IkeEncryptionInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryptionInput"></a>

```csharp
public string IkeEncryptionInput { get; }
```

- *Type:* string

---

##### `IkeIntegrityInput`<sup>Optional</sup> <a name="IkeIntegrityInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrityInput"></a>

```csharp
public string IkeIntegrityInput { get; }
```

- *Type:* string

---

##### `IpsecEncryptionInput`<sup>Optional</sup> <a name="IpsecEncryptionInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryptionInput"></a>

```csharp
public string IpsecEncryptionInput { get; }
```

- *Type:* string

---

##### `IpsecIntegrityInput`<sup>Optional</sup> <a name="IpsecIntegrityInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrityInput"></a>

```csharp
public string IpsecIntegrityInput { get; }
```

- *Type:* string

---

##### `PfsGroupInput`<sup>Optional</sup> <a name="PfsGroupInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```csharp
public string PfsGroupInput { get; }
```

- *Type:* string

---

##### `SaDatasizeInput`<sup>Optional</sup> <a name="SaDatasizeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasizeInput"></a>

```csharp
public double SaDatasizeInput { get; }
```

- *Type:* double

---

##### `SaLifetimeInput`<sup>Optional</sup> <a name="SaLifetimeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetimeInput"></a>

```csharp
public double SaLifetimeInput { get; }
```

- *Type:* double

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeEncryption"></a>

```csharp
public string IkeEncryption { get; }
```

- *Type:* string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```csharp
public string IkeIntegrity { get; }
```

- *Type:* string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```csharp
public string IpsecEncryption { get; }
```

- *Type:* string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```csharp
public string IpsecIntegrity { get; }
```

- *Type:* string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.pfsGroup"></a>

```csharp
public string PfsGroup { get; }
```

- *Type:* string

---

##### `SaDatasize`<sup>Required</sup> <a name="SaDatasize" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saDatasize"></a>

```csharp
public double SaDatasize { get; }
```

- *Type:* double

---

##### `SaLifetime`<sup>Required</sup> <a name="SaLifetime" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.saLifetime"></a>

```csharp
public double SaLifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicyOutputReference.property.internalValue"></a>

```csharp
public VirtualNetworkGatewayConnectionIpsecPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionIpsecPolicy">VirtualNetworkGatewayConnectionIpsecPolicy</a>

---


### VirtualNetworkGatewayConnectionTimeoutsOutputReference <a name="VirtualNetworkGatewayConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualNetworkGatewayConnectionTrafficSelectorPolicyList <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicyList" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionTrafficSelectorPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get"></a>

```csharp
private VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference <a name="VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrsInput">LocalAddressCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrsInput">RemoteAddressCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs">LocalAddressCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs">RemoteAddressCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalAddressCidrsInput`<sup>Optional</sup> <a name="LocalAddressCidrsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrsInput"></a>

```csharp
public string[] LocalAddressCidrsInput { get; }
```

- *Type:* string[]

---

##### `RemoteAddressCidrsInput`<sup>Optional</sup> <a name="RemoteAddressCidrsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrsInput"></a>

```csharp
public string[] RemoteAddressCidrsInput { get; }
```

- *Type:* string[]

---

##### `LocalAddressCidrs`<sup>Required</sup> <a name="LocalAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.localAddressCidrs"></a>

```csharp
public string[] LocalAddressCidrs { get; }
```

- *Type:* string[]

---

##### `RemoteAddressCidrs`<sup>Required</sup> <a name="RemoteAddressCidrs" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.remoteAddressCidrs"></a>

```csharp
public string[] RemoteAddressCidrs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayConnection.VirtualNetworkGatewayConnectionTrafficSelectorPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



