# `expressRouteCircuitPeering` Submodule <a name="`expressRouteCircuitPeering` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuitPeering <a name="ExpressRouteCircuitPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeering(Construct Scope, string Id, ExpressRouteCircuitPeeringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig">ExpressRouteCircuitPeeringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig">ExpressRouteCircuitPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig">PutMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled">ResetIpv4Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig">ResetMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn">ResetPeerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix">ResetPrimaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId">ResetRouteFilterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix">ResetSecondaryPeerAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey">ResetSharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6"></a>

```csharp
private void PutIpv6(ExpressRouteCircuitPeeringIpv6 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `PutMicrosoftPeeringConfig` <a name="PutMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig"></a>

```csharp
private void PutMicrosoftPeeringConfig(ExpressRouteCircuitPeeringMicrosoftPeeringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putMicrosoftPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts"></a>

```csharp
private void PutTimeouts(ExpressRouteCircuitPeeringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv4Enabled` <a name="ResetIpv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv4Enabled"></a>

```csharp
private void ResetIpv4Enabled()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetIpv6"></a>

```csharp
private void ResetIpv6()
```

##### `ResetMicrosoftPeeringConfig` <a name="ResetMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetMicrosoftPeeringConfig"></a>

```csharp
private void ResetMicrosoftPeeringConfig()
```

##### `ResetPeerAsn` <a name="ResetPeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPeerAsn"></a>

```csharp
private void ResetPeerAsn()
```

##### `ResetPrimaryPeerAddressPrefix` <a name="ResetPrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetPrimaryPeerAddressPrefix"></a>

```csharp
private void ResetPrimaryPeerAddressPrefix()
```

##### `ResetRouteFilterId` <a name="ResetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetRouteFilterId"></a>

```csharp
private void ResetRouteFilterId()
```

##### `ResetSecondaryPeerAddressPrefix` <a name="ResetSecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSecondaryPeerAddressPrefix"></a>

```csharp
private void ResetSecondaryPeerAddressPrefix()
```

##### `ResetSharedKey` <a name="ResetSharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetSharedKey"></a>

```csharp
private void ResetSharedKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRouteCircuitPeering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRouteCircuitPeering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRouteCircuitPeering.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ExpressRouteCircuitPeering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExpressRouteCircuitPeering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExpressRouteCircuitPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRouteCircuitPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn">AzureAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag">GatewayManagerEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig">MicrosoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort">PrimaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort">SecondaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">ExpressRouteCircuitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput">Ipv4EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input">Ipv6Input</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput">MicrosoftPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput">PeerAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput">PeeringTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput">PrimaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput">RouteFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput">SecondaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput">SharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput">VlanIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName">ExpressRouteCircuitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn">PeerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType">PeeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId">RouteFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey">SharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId">VlanId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureAsn`<sup>Required</sup> <a name="AzureAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.azureAsn"></a>

```csharp
public double AzureAsn { get; }
```

- *Type:* double

---

##### `GatewayManagerEtag`<sup>Required</sup> <a name="GatewayManagerEtag" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```csharp
public string GatewayManagerEtag { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6OutputReference Ipv6 { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference">ExpressRouteCircuitPeeringIpv6OutputReference</a>

---

##### `MicrosoftPeeringConfig`<sup>Required</sup> <a name="MicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfig"></a>

```csharp
public ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference MicrosoftPeeringConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference">ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference</a>

---

##### `PrimaryAzurePort`<sup>Required</sup> <a name="PrimaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```csharp
public string PrimaryAzurePort { get; }
```

- *Type:* string

---

##### `SecondaryAzurePort`<sup>Required</sup> <a name="SecondaryAzurePort" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```csharp
public string SecondaryAzurePort { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeouts"></a>

```csharp
public ExpressRouteCircuitPeeringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference">ExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `ExpressRouteCircuitNameInput`<sup>Optional</sup> <a name="ExpressRouteCircuitNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```csharp
public string ExpressRouteCircuitNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv4EnabledInput`<sup>Optional</sup> <a name="Ipv4EnabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4EnabledInput"></a>

```csharp
public object Ipv4EnabledInput { get; }
```

- *Type:* object

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv6Input"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6 Ipv6Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---

##### `MicrosoftPeeringConfigInput`<sup>Optional</sup> <a name="MicrosoftPeeringConfigInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.microsoftPeeringConfigInput"></a>

```csharp
public ExpressRouteCircuitPeeringMicrosoftPeeringConfig MicrosoftPeeringConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---

##### `PeerAsnInput`<sup>Optional</sup> <a name="PeerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsnInput"></a>

```csharp
public double PeerAsnInput { get; }
```

- *Type:* double

---

##### `PeeringTypeInput`<sup>Optional</sup> <a name="PeeringTypeInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```csharp
public string PeeringTypeInput { get; }
```

- *Type:* string

---

##### `PrimaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="PrimaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefixInput"></a>

```csharp
public string PrimaryPeerAddressPrefixInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RouteFilterIdInput`<sup>Optional</sup> <a name="RouteFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterIdInput"></a>

```csharp
public string RouteFilterIdInput { get; }
```

- *Type:* string

---

##### `SecondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="SecondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefixInput"></a>

```csharp
public string SecondaryPeerAddressPrefixInput { get; }
```

- *Type:* string

---

##### `SharedKeyInput`<sup>Optional</sup> <a name="SharedKeyInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKeyInput"></a>

```csharp
public string SharedKeyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanIdInput"></a>

```csharp
public double VlanIdInput { get; }
```

- *Type:* double

---

##### `ExpressRouteCircuitName`<sup>Required</sup> <a name="ExpressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```csharp
public string ExpressRouteCircuitName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv4Enabled`<sup>Required</sup> <a name="Ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```csharp
public object Ipv4Enabled { get; }
```

- *Type:* object

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peerAsn"></a>

```csharp
public double PeerAsn { get; }
```

- *Type:* double

---

##### `PeeringType`<sup>Required</sup> <a name="PeeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.peeringType"></a>

```csharp
public string PeeringType { get; }
```

- *Type:* string

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```csharp
public string PrimaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RouteFilterId`<sup>Required</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.routeFilterId"></a>

```csharp
public string RouteFilterId { get; }
```

- *Type:* string

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```csharp
public string SecondaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.sharedKey"></a>

```csharp
public string SharedKey { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.vlanId"></a>

```csharp
public double VlanId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitPeeringConfig <a name="ExpressRouteCircuitPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExpressRouteCircuitName,
    string PeeringType,
    string ResourceGroupName,
    double VlanId,
    string Id = null,
    object Ipv4Enabled = null,
    ExpressRouteCircuitPeeringIpv6 Ipv6 = null,
    ExpressRouteCircuitPeeringMicrosoftPeeringConfig MicrosoftPeeringConfig = null,
    double PeerAsn = null,
    string PrimaryPeerAddressPrefix = null,
    string RouteFilterId = null,
    string SecondaryPeerAddressPrefix = null,
    string SharedKey = null,
    ExpressRouteCircuitPeeringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">ExpressRouteCircuitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType">PeeringType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId">VlanId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | ipv6 block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig">MicrosoftPeeringConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | microsoft_peering_config block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn">PeerAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId">RouteFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey">SharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExpressRouteCircuitName`<sup>Required</sup> <a name="ExpressRouteCircuitName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```csharp
public string ExpressRouteCircuitName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#express_route_circuit_name ExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `PeeringType`<sup>Required</sup> <a name="PeeringType" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```csharp
public string PeeringType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#peering_type ExpressRouteCircuitPeering#peering_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#resource_group_name ExpressRouteCircuitPeering#resource_group_name}.

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.vlanId"></a>

```csharp
public double VlanId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#vlan_id ExpressRouteCircuitPeering#vlan_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#id ExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv4Enabled`<sup>Optional</sup> <a name="Ipv4Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv4Enabled"></a>

```csharp
public object Ipv4Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#ipv4_enabled ExpressRouteCircuitPeering#ipv4_enabled}.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.ipv6"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6 Ipv6 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#ipv6 ExpressRouteCircuitPeering#ipv6}

---

##### `MicrosoftPeeringConfig`<sup>Optional</sup> <a name="MicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.microsoftPeeringConfig"></a>

```csharp
public ExpressRouteCircuitPeeringMicrosoftPeeringConfig MicrosoftPeeringConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

microsoft_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#microsoft_peering_config ExpressRouteCircuitPeering#microsoft_peering_config}

---

##### `PeerAsn`<sup>Optional</sup> <a name="PeerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.peerAsn"></a>

```csharp
public double PeerAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#peer_asn ExpressRouteCircuitPeering#peer_asn}.

---

##### `PrimaryPeerAddressPrefix`<sup>Optional</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.primaryPeerAddressPrefix"></a>

```csharp
public string PrimaryPeerAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `RouteFilterId`<sup>Optional</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.routeFilterId"></a>

```csharp
public string RouteFilterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

##### `SecondaryPeerAddressPrefix`<sup>Optional</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.secondaryPeerAddressPrefix"></a>

```csharp
public string SecondaryPeerAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `SharedKey`<sup>Optional</sup> <a name="SharedKey" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.sharedKey"></a>

```csharp
public string SharedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#shared_key ExpressRouteCircuitPeering#shared_key}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```csharp
public ExpressRouteCircuitPeeringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts">ExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#timeouts ExpressRouteCircuitPeering#timeouts}

---

### ExpressRouteCircuitPeeringIpv6 <a name="ExpressRouteCircuitPeeringIpv6" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringIpv6 {
    string PrimaryPeerAddressPrefix,
    string SecondaryPeerAddressPrefix,
    object Enabled = null,
    ExpressRouteCircuitPeeringIpv6MicrosoftPeering MicrosoftPeering = null,
    string RouteFilterId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering">MicrosoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | microsoft_peering block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId">RouteFilterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}. |

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.primaryPeerAddressPrefix"></a>

```csharp
public string PrimaryPeerAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#primary_peer_address_prefix ExpressRouteCircuitPeering#primary_peer_address_prefix}.

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.secondaryPeerAddressPrefix"></a>

```csharp
public string SecondaryPeerAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#secondary_peer_address_prefix ExpressRouteCircuitPeering#secondary_peer_address_prefix}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#enabled ExpressRouteCircuitPeering#enabled}.

---

##### `MicrosoftPeering`<sup>Optional</sup> <a name="MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.microsoftPeering"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6MicrosoftPeering MicrosoftPeering { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

microsoft_peering block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#microsoft_peering ExpressRouteCircuitPeering#microsoft_peering}

---

##### `RouteFilterId`<sup>Optional</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6.property.routeFilterId"></a>

```csharp
public string RouteFilterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#route_filter_id ExpressRouteCircuitPeering#route_filter_id}.

---

### ExpressRouteCircuitPeeringIpv6MicrosoftPeering <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringIpv6MicrosoftPeering {
    string[] AdvertisedCommunities = null,
    string[] AdvertisedPublicPrefixes = null,
    double CustomerAsn = null,
    string RoutingRegistryName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn">CustomerAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName">RoutingRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `AdvertisedCommunities`<sup>Optional</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedCommunities"></a>

```csharp
public string[] AdvertisedCommunities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `AdvertisedPublicPrefixes`<sup>Optional</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.advertisedPublicPrefixes"></a>

```csharp
public string[] AdvertisedPublicPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `CustomerAsn`<sup>Optional</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.customerAsn"></a>

```csharp
public double CustomerAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `RoutingRegistryName`<sup>Optional</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering.property.routingRegistryName"></a>

```csharp
public string RoutingRegistryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringMicrosoftPeeringConfig <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfig" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringMicrosoftPeeringConfig {
    string[] AdvertisedPublicPrefixes,
    string[] AdvertisedCommunities = null,
    double CustomerAsn = null,
    string RoutingRegistryName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn">CustomerAsn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName">RoutingRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}. |

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedPublicPrefixes"></a>

```csharp
public string[] AdvertisedPublicPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_public_prefixes ExpressRouteCircuitPeering#advertised_public_prefixes}.

---

##### `AdvertisedCommunities`<sup>Optional</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.advertisedCommunities"></a>

```csharp
public string[] AdvertisedCommunities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#advertised_communities ExpressRouteCircuitPeering#advertised_communities}.

---

##### `CustomerAsn`<sup>Optional</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.customerAsn"></a>

```csharp
public double CustomerAsn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#customer_asn ExpressRouteCircuitPeering#customer_asn}.

---

##### `RoutingRegistryName`<sup>Optional</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig.property.routingRegistryName"></a>

```csharp
public string RoutingRegistryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#routing_registry_name ExpressRouteCircuitPeering#routing_registry_name}.

---

### ExpressRouteCircuitPeeringTimeouts <a name="ExpressRouteCircuitPeeringTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#create ExpressRouteCircuitPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#delete ExpressRouteCircuitPeering#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#read ExpressRouteCircuitPeering#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/express_route_circuit_peering#update ExpressRouteCircuitPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference <a name="ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities">ResetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes">ResetAdvertisedPublicPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn">ResetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName">ResetRoutingRegistryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertisedCommunities` <a name="ResetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedCommunities"></a>

```csharp
private void ResetAdvertisedCommunities()
```

##### `ResetAdvertisedPublicPrefixes` <a name="ResetAdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetAdvertisedPublicPrefixes"></a>

```csharp
private void ResetAdvertisedPublicPrefixes()
```

##### `ResetCustomerAsn` <a name="ResetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetCustomerAsn"></a>

```csharp
private void ResetCustomerAsn()
```

##### `ResetRoutingRegistryName` <a name="ResetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resetRoutingRegistryName"></a>

```csharp
private void ResetRoutingRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput">AdvertisedCommunitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput">AdvertisedPublicPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput">CustomerAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput">RoutingRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName">RoutingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvertisedCommunitiesInput`<sup>Optional</sup> <a name="AdvertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunitiesInput"></a>

```csharp
public string[] AdvertisedCommunitiesInput { get; }
```

- *Type:* string[]

---

##### `AdvertisedPublicPrefixesInput`<sup>Optional</sup> <a name="AdvertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixesInput"></a>

```csharp
public string[] AdvertisedPublicPrefixesInput { get; }
```

- *Type:* string[]

---

##### `CustomerAsnInput`<sup>Optional</sup> <a name="CustomerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsnInput"></a>

```csharp
public double CustomerAsnInput { get; }
```

- *Type:* double

---

##### `RoutingRegistryNameInput`<sup>Optional</sup> <a name="RoutingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryNameInput"></a>

```csharp
public string RoutingRegistryNameInput { get; }
```

- *Type:* string

---

##### `AdvertisedCommunities`<sup>Required</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities"></a>

```csharp
public string[] AdvertisedCommunities { get; }
```

- *Type:* string[]

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes"></a>

```csharp
public string[] AdvertisedPublicPrefixes { get; }
```

- *Type:* string[]

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn"></a>

```csharp
public double CustomerAsn { get; }
```

- *Type:* double

---

##### `RoutingRegistryName`<sup>Required</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName"></a>

```csharp
public string RoutingRegistryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6MicrosoftPeering InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---


### ExpressRouteCircuitPeeringIpv6OutputReference <a name="ExpressRouteCircuitPeeringIpv6OutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering">PutMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering">ResetMicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId">ResetRouteFilterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMicrosoftPeering` <a name="PutMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering"></a>

```csharp
private void PutMicrosoftPeering(ExpressRouteCircuitPeeringIpv6MicrosoftPeering Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.putMicrosoftPeering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMicrosoftPeering` <a name="ResetMicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetMicrosoftPeering"></a>

```csharp
private void ResetMicrosoftPeering()
```

##### `ResetRouteFilterId` <a name="ResetRouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.resetRouteFilterId"></a>

```csharp
private void ResetRouteFilterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering">MicrosoftPeering</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput">MicrosoftPeeringInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput">PrimaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput">RouteFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput">SecondaryPeerAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId">RouteFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MicrosoftPeering`<sup>Required</sup> <a name="MicrosoftPeering" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference MicrosoftPeering { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference">ExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `MicrosoftPeeringInput`<sup>Optional</sup> <a name="MicrosoftPeeringInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeeringInput"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6MicrosoftPeering MicrosoftPeeringInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6MicrosoftPeering">ExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---

##### `PrimaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="PrimaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefixInput"></a>

```csharp
public string PrimaryPeerAddressPrefixInput { get; }
```

- *Type:* string

---

##### `RouteFilterIdInput`<sup>Optional</sup> <a name="RouteFilterIdInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterIdInput"></a>

```csharp
public string RouteFilterIdInput { get; }
```

- *Type:* string

---

##### `SecondaryPeerAddressPrefixInput`<sup>Optional</sup> <a name="SecondaryPeerAddressPrefixInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefixInput"></a>

```csharp
public string SecondaryPeerAddressPrefixInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix"></a>

```csharp
public string PrimaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `RouteFilterId`<sup>Required</sup> <a name="RouteFilterId" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId"></a>

```csharp
public string RouteFilterId { get; }
```

- *Type:* string

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix"></a>

```csharp
public string SecondaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue"></a>

```csharp
public ExpressRouteCircuitPeeringIpv6 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringIpv6">ExpressRouteCircuitPeeringIpv6</a>

---


### ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference <a name="ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities">ResetAdvertisedCommunities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn">ResetCustomerAsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName">ResetRoutingRegistryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertisedCommunities` <a name="ResetAdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetAdvertisedCommunities"></a>

```csharp
private void ResetAdvertisedCommunities()
```

##### `ResetCustomerAsn` <a name="ResetCustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetCustomerAsn"></a>

```csharp
private void ResetCustomerAsn()
```

##### `ResetRoutingRegistryName` <a name="ResetRoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resetRoutingRegistryName"></a>

```csharp
private void ResetRoutingRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput">AdvertisedCommunitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput">AdvertisedPublicPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput">CustomerAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput">RoutingRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName">RoutingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvertisedCommunitiesInput`<sup>Optional</sup> <a name="AdvertisedCommunitiesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunitiesInput"></a>

```csharp
public string[] AdvertisedCommunitiesInput { get; }
```

- *Type:* string[]

---

##### `AdvertisedPublicPrefixesInput`<sup>Optional</sup> <a name="AdvertisedPublicPrefixesInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixesInput"></a>

```csharp
public string[] AdvertisedPublicPrefixesInput { get; }
```

- *Type:* string[]

---

##### `CustomerAsnInput`<sup>Optional</sup> <a name="CustomerAsnInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsnInput"></a>

```csharp
public double CustomerAsnInput { get; }
```

- *Type:* double

---

##### `RoutingRegistryNameInput`<sup>Optional</sup> <a name="RoutingRegistryNameInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryNameInput"></a>

```csharp
public string RoutingRegistryNameInput { get; }
```

- *Type:* string

---

##### `AdvertisedCommunities`<sup>Required</sup> <a name="AdvertisedCommunities" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities"></a>

```csharp
public string[] AdvertisedCommunities { get; }
```

- *Type:* string[]

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes"></a>

```csharp
public string[] AdvertisedPublicPrefixes { get; }
```

- *Type:* string[]

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn"></a>

```csharp
public double CustomerAsn { get; }
```

- *Type:* double

---

##### `RoutingRegistryName`<sup>Required</sup> <a name="RoutingRegistryName" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName"></a>

```csharp
public string RoutingRegistryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue"></a>

```csharp
public ExpressRouteCircuitPeeringMicrosoftPeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringMicrosoftPeeringConfig">ExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---


### ExpressRouteCircuitPeeringTimeoutsOutputReference <a name="ExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ExpressRouteCircuitPeeringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuitPeering.ExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



