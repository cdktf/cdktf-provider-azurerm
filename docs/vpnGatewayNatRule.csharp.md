# `vpnGatewayNatRule` Submodule <a name="`vpnGatewayNatRule` Submodule" id="@cdktf/provider-azurerm.vpnGatewayNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayNatRule <a name="VpnGatewayNatRule" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule azurerm_vpn_gateway_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRule(Construct Scope, string Id, VpnGatewayNatRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig">VpnGatewayNatRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig">VpnGatewayNatRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping">PutExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping">PutInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalAddressSpaceMappings">ResetExternalAddressSpaceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping">ResetExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalAddressSpaceMappings">ResetInternalAddressSpaceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping">ResetInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId">ResetIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalMapping` <a name="PutExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping"></a>

```csharp
private void PutExternalMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping.parameter.value"></a>

- *Type:* object

---

##### `PutInternalMapping` <a name="PutInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping"></a>

```csharp
private void PutInternalMapping(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts"></a>

```csharp
private void PutTimeouts(VpnGatewayNatRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---

##### `ResetExternalAddressSpaceMappings` <a name="ResetExternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalAddressSpaceMappings"></a>

```csharp
private void ResetExternalAddressSpaceMappings()
```

##### `ResetExternalMapping` <a name="ResetExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping"></a>

```csharp
private void ResetExternalMapping()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternalAddressSpaceMappings` <a name="ResetInternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalAddressSpaceMappings"></a>

```csharp
private void ResetInternalAddressSpaceMappings()
```

##### `ResetInternalMapping` <a name="ResetInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping"></a>

```csharp
private void ResetInternalMapping()
```

##### `ResetIpConfigurationId` <a name="ResetIpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId"></a>

```csharp
private void ResetIpConfigurationId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnGatewayNatRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGatewayNatRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGatewayNatRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGatewayNatRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGatewayNatRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpnGatewayNatRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnGatewayNatRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnGatewayNatRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpnGatewayNatRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping">ExternalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping">InternalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappingsInput">ExternalAddressSpaceMappingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput">ExternalMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappingsInput">InternalAddressSpaceMappingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput">InternalMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput">IpConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappings">ExternalAddressSpaceMappings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappings">InternalAddressSpaceMappings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId">IpConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExternalMapping`<sup>Required</sup> <a name="ExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping"></a>

```csharp
public VpnGatewayNatRuleExternalMappingList ExternalMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a>

---

##### `InternalMapping`<sup>Required</sup> <a name="InternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping"></a>

```csharp
public VpnGatewayNatRuleInternalMappingList InternalMapping { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts"></a>

```csharp
public VpnGatewayNatRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a>

---

##### `ExternalAddressSpaceMappingsInput`<sup>Optional</sup> <a name="ExternalAddressSpaceMappingsInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappingsInput"></a>

```csharp
public string[] ExternalAddressSpaceMappingsInput { get; }
```

- *Type:* string[]

---

##### `ExternalMappingInput`<sup>Optional</sup> <a name="ExternalMappingInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput"></a>

```csharp
public object ExternalMappingInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternalAddressSpaceMappingsInput`<sup>Optional</sup> <a name="InternalAddressSpaceMappingsInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappingsInput"></a>

```csharp
public string[] InternalAddressSpaceMappingsInput { get; }
```

- *Type:* string[]

---

##### `InternalMappingInput`<sup>Optional</sup> <a name="InternalMappingInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput"></a>

```csharp
public object InternalMappingInput { get; }
```

- *Type:* object

---

##### `IpConfigurationIdInput`<sup>Optional</sup> <a name="IpConfigurationIdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput"></a>

```csharp
public string IpConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput"></a>

```csharp
public string VpnGatewayIdInput { get; }
```

- *Type:* string

---

##### `ExternalAddressSpaceMappings`<sup>Required</sup> <a name="ExternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalAddressSpaceMappings"></a>

```csharp
public string[] ExternalAddressSpaceMappings { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalAddressSpaceMappings`<sup>Required</sup> <a name="InternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalAddressSpaceMappings"></a>

```csharp
public string[] InternalAddressSpaceMappings { get; }
```

- *Type:* string[]

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId"></a>

```csharp
public string IpConfigurationId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayNatRuleConfig <a name="VpnGatewayNatRuleConfig" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string VpnGatewayId,
    string[] ExternalAddressSpaceMappings = null,
    object ExternalMapping = null,
    string Id = null,
    string[] InternalAddressSpaceMappings = null,
    object InternalMapping = null,
    string IpConfigurationId = null,
    string Mode = null,
    VpnGatewayNatRuleTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#resource_group_name VpnGatewayNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalAddressSpaceMappings">ExternalAddressSpaceMappings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#external_address_space_mappings VpnGatewayNatRule#external_address_space_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping">ExternalMapping</a></code> | <code>object</code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalAddressSpaceMappings">InternalAddressSpaceMappings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#internal_address_space_mappings VpnGatewayNatRule#internal_address_space_mappings}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping">InternalMapping</a></code> | <code>object</code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId">IpConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#resource_group_name VpnGatewayNatRule#resource_group_name}.

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}.

---

##### `ExternalAddressSpaceMappings`<sup>Optional</sup> <a name="ExternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalAddressSpaceMappings"></a>

```csharp
public string[] ExternalAddressSpaceMappings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#external_address_space_mappings VpnGatewayNatRule#external_address_space_mappings}.

---

##### `ExternalMapping`<sup>Optional</sup> <a name="ExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping"></a>

```csharp
public object ExternalMapping { get; set; }
```

- *Type:* object

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#external_mapping VpnGatewayNatRule#external_mapping}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalAddressSpaceMappings`<sup>Optional</sup> <a name="InternalAddressSpaceMappings" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalAddressSpaceMappings"></a>

```csharp
public string[] InternalAddressSpaceMappings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#internal_address_space_mappings VpnGatewayNatRule#internal_address_space_mappings}.

---

##### `InternalMapping`<sup>Optional</sup> <a name="InternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping"></a>

```csharp
public object InternalMapping { get; set; }
```

- *Type:* object

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#internal_mapping VpnGatewayNatRule#internal_mapping}

---

##### `IpConfigurationId`<sup>Optional</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId"></a>

```csharp
public string IpConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts"></a>

```csharp
public VpnGatewayNatRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#timeouts VpnGatewayNatRule#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}.

---

### VpnGatewayNatRuleExternalMapping <a name="VpnGatewayNatRuleExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleExternalMapping {
    string AddressSpace,
    string PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace">AddressSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange">PortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace"></a>

```csharp
public string AddressSpace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange"></a>

```csharp
public string PortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleInternalMapping <a name="VpnGatewayNatRuleInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleInternalMapping {
    string AddressSpace,
    string PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace">AddressSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange">PortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace"></a>

```csharp
public string AddressSpace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange"></a>

```csharp
public string PortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleTimeouts <a name="VpnGatewayNatRuleTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayNatRuleExternalMappingList <a name="VpnGatewayNatRuleExternalMappingList" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleExternalMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get"></a>

```csharp
private VpnGatewayNatRuleExternalMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnGatewayNatRuleExternalMappingOutputReference <a name="VpnGatewayNatRuleExternalMappingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleExternalMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput">AddressSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace">AddressSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressSpaceInput`<sup>Optional</sup> <a name="AddressSpaceInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput"></a>

```csharp
public string AddressSpaceInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput"></a>

```csharp
public string PortRangeInput { get; }
```

- *Type:* string

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace"></a>

```csharp
public string AddressSpace { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnGatewayNatRuleInternalMappingList <a name="VpnGatewayNatRuleInternalMappingList" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleInternalMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get"></a>

```csharp
private VpnGatewayNatRuleInternalMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnGatewayNatRuleInternalMappingOutputReference <a name="VpnGatewayNatRuleInternalMappingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleInternalMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput">AddressSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace">AddressSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressSpaceInput`<sup>Optional</sup> <a name="AddressSpaceInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput"></a>

```csharp
public string AddressSpaceInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput"></a>

```csharp
public string PortRangeInput { get; }
```

- *Type:* string

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace"></a>

```csharp
public string AddressSpace { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnGatewayNatRuleTimeoutsOutputReference <a name="VpnGatewayNatRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayNatRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



