# `vpnGateway` Submodule <a name="`vpnGateway` Submodule" id="@cdktf/provider-azurerm.vpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGateway <a name="VpnGateway" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway azurerm_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGateway(Construct Scope, string Id, VpnGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig">VpnGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig">VpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings">PutBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpRouteTranslationForNatEnabled">ResetBgpRouteTranslationForNatEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpSettings">ResetBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetRoutingPreference">ResetRoutingPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetScaleUnit">ResetScaleUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpSettings` <a name="PutBgpSettings" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings"></a>

```csharp
private void PutBgpSettings(VpnGatewayBgpSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putBgpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(VpnGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

---

##### `ResetBgpRouteTranslationForNatEnabled` <a name="ResetBgpRouteTranslationForNatEnabled" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpRouteTranslationForNatEnabled"></a>

```csharp
private void ResetBgpRouteTranslationForNatEnabled()
```

##### `ResetBgpSettings` <a name="ResetBgpSettings" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetBgpSettings"></a>

```csharp
private void ResetBgpSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRoutingPreference` <a name="ResetRoutingPreference" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetRoutingPreference"></a>

```csharp
private void ResetRoutingPreference()
```

##### `ResetScaleUnit` <a name="ResetScaleUnit" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetScaleUnit"></a>

```csharp
private void ResetScaleUnit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VpnGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpnGateway resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettings">BgpSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference">VpnGatewayBgpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference">VpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabledInput">BgpRouteTranslationForNatEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettingsInput">BgpSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreferenceInput">RoutingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnitInput">ScaleUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubIdInput">VirtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabled">BgpRouteTranslationForNatEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreference">RoutingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnit">ScaleUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BgpSettings`<sup>Required</sup> <a name="BgpSettings" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettings"></a>

```csharp
public VpnGatewayBgpSettingsOutputReference BgpSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference">VpnGatewayBgpSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeouts"></a>

```csharp
public VpnGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference">VpnGatewayTimeoutsOutputReference</a>

---

##### `BgpRouteTranslationForNatEnabledInput`<sup>Optional</sup> <a name="BgpRouteTranslationForNatEnabledInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabledInput"></a>

```csharp
public object BgpRouteTranslationForNatEnabledInput { get; }
```

- *Type:* object

---

##### `BgpSettingsInput`<sup>Optional</sup> <a name="BgpSettingsInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpSettingsInput"></a>

```csharp
public VpnGatewayBgpSettings BgpSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RoutingPreferenceInput`<sup>Optional</sup> <a name="RoutingPreferenceInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreferenceInput"></a>

```csharp
public string RoutingPreferenceInput { get; }
```

- *Type:* string

---

##### `ScaleUnitInput`<sup>Optional</sup> <a name="ScaleUnitInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnitInput"></a>

```csharp
public double ScaleUnitInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualHubIdInput`<sup>Optional</sup> <a name="VirtualHubIdInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubIdInput"></a>

```csharp
public string VirtualHubIdInput { get; }
```

- *Type:* string

---

##### `BgpRouteTranslationForNatEnabled`<sup>Required</sup> <a name="BgpRouteTranslationForNatEnabled" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.bgpRouteTranslationForNatEnabled"></a>

```csharp
public object BgpRouteTranslationForNatEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RoutingPreference`<sup>Required</sup> <a name="RoutingPreference" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.routingPreference"></a>

```csharp
public string RoutingPreference { get; }
```

- *Type:* string

---

##### `ScaleUnit`<sup>Required</sup> <a name="ScaleUnit" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.scaleUnit"></a>

```csharp
public double ScaleUnit { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.vpnGateway.VpnGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayBgpSettings <a name="VpnGatewayBgpSettings" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayBgpSettings {
    double Asn,
    double PeerWeight,
    VpnGatewayBgpSettingsInstance0BgpPeeringAddress Instance0BgpPeeringAddress = null,
    VpnGatewayBgpSettingsInstance1BgpPeeringAddress Instance1BgpPeeringAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.asn">Asn</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#asn VpnGateway#asn}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.peerWeight">PeerWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance0BgpPeeringAddress">Instance0BgpPeeringAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | instance_0_bgp_peering_address block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance1BgpPeeringAddress">Instance1BgpPeeringAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | instance_1_bgp_peering_address block. |

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.asn"></a>

```csharp
public double Asn { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#asn VpnGateway#asn}.

---

##### `PeerWeight`<sup>Required</sup> <a name="PeerWeight" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.peerWeight"></a>

```csharp
public double PeerWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#peer_weight VpnGateway#peer_weight}.

---

##### `Instance0BgpPeeringAddress`<sup>Optional</sup> <a name="Instance0BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance0BgpPeeringAddress"></a>

```csharp
public VpnGatewayBgpSettingsInstance0BgpPeeringAddress Instance0BgpPeeringAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

instance_0_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#instance_0_bgp_peering_address VpnGateway#instance_0_bgp_peering_address}

---

##### `Instance1BgpPeeringAddress`<sup>Optional</sup> <a name="Instance1BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings.property.instance1BgpPeeringAddress"></a>

```csharp
public VpnGatewayBgpSettingsInstance1BgpPeeringAddress Instance1BgpPeeringAddress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

instance_1_bgp_peering_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#instance_1_bgp_peering_address VpnGateway#instance_1_bgp_peering_address}

---

### VpnGatewayBgpSettingsInstance0BgpPeeringAddress <a name="VpnGatewayBgpSettingsInstance0BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayBgpSettingsInstance0BgpPeeringAddress {
    string[] CustomIps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.property.customIps">CustomIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}. |

---

##### `CustomIps`<sup>Required</sup> <a name="CustomIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress.property.customIps"></a>

```csharp
public string[] CustomIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

### VpnGatewayBgpSettingsInstance1BgpPeeringAddress <a name="VpnGatewayBgpSettingsInstance1BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayBgpSettingsInstance1BgpPeeringAddress {
    string[] CustomIps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.property.customIps">CustomIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}. |

---

##### `CustomIps`<sup>Required</sup> <a name="CustomIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress.property.customIps"></a>

```csharp
public string[] CustomIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#custom_ips VpnGateway#custom_ips}.

---

### VpnGatewayConfig <a name="VpnGatewayConfig" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayConfig {
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
    string VirtualHubId,
    object BgpRouteTranslationForNatEnabled = null,
    VpnGatewayBgpSettings BgpSettings = null,
    string Id = null,
    string RoutingPreference = null,
    double ScaleUnit = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VpnGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#location VpnGateway#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#name VpnGateway#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpRouteTranslationForNatEnabled">BgpRouteTranslationForNatEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpSettings">BgpSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | bgp_settings block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#id VpnGateway#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.routingPreference">RoutingPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.scaleUnit">ScaleUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#tags VpnGateway#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#location VpnGateway#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#name VpnGateway#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#resource_group_name VpnGateway#resource_group_name}.

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#virtual_hub_id VpnGateway#virtual_hub_id}.

---

##### `BgpRouteTranslationForNatEnabled`<sup>Optional</sup> <a name="BgpRouteTranslationForNatEnabled" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpRouteTranslationForNatEnabled"></a>

```csharp
public object BgpRouteTranslationForNatEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#bgp_route_translation_for_nat_enabled VpnGateway#bgp_route_translation_for_nat_enabled}.

---

##### `BgpSettings`<sup>Optional</sup> <a name="BgpSettings" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.bgpSettings"></a>

```csharp
public VpnGatewayBgpSettings BgpSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

bgp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#bgp_settings VpnGateway#bgp_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#id VpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoutingPreference`<sup>Optional</sup> <a name="RoutingPreference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.routingPreference"></a>

```csharp
public string RoutingPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#routing_preference VpnGateway#routing_preference}.

---

##### `ScaleUnit`<sup>Optional</sup> <a name="ScaleUnit" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.scaleUnit"></a>

```csharp
public double ScaleUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#scale_unit VpnGateway#scale_unit}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#tags VpnGateway#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayConfig.property.timeouts"></a>

```csharp
public VpnGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts">VpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#timeouts VpnGateway#timeouts}

---

### VpnGatewayTimeouts <a name="VpnGatewayTimeouts" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#create VpnGateway#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#delete VpnGateway#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#read VpnGateway#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#update VpnGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#create VpnGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#delete VpnGateway#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#read VpnGateway#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/vpn_gateway#update VpnGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference <a name="VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps">DefaultIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId">IpConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps">TunnelIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIpsInput">CustomIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps">CustomIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultIps`<sup>Required</sup> <a name="DefaultIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.defaultIps"></a>

```csharp
public string[] DefaultIps { get; }
```

- *Type:* string[]

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```csharp
public string IpConfigurationId { get; }
```

- *Type:* string

---

##### `TunnelIps`<sup>Required</sup> <a name="TunnelIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```csharp
public string[] TunnelIps { get; }
```

- *Type:* string[]

---

##### `CustomIpsInput`<sup>Optional</sup> <a name="CustomIpsInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIpsInput"></a>

```csharp
public string[] CustomIpsInput { get; }
```

- *Type:* string[]

---

##### `CustomIps`<sup>Required</sup> <a name="CustomIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.customIps"></a>

```csharp
public string[] CustomIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference.property.internalValue"></a>

```csharp
public VpnGatewayBgpSettingsInstance0BgpPeeringAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---


### VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference <a name="VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps">DefaultIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId">IpConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps">TunnelIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIpsInput">CustomIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps">CustomIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultIps`<sup>Required</sup> <a name="DefaultIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.defaultIps"></a>

```csharp
public string[] DefaultIps { get; }
```

- *Type:* string[]

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.ipConfigurationId"></a>

```csharp
public string IpConfigurationId { get; }
```

- *Type:* string

---

##### `TunnelIps`<sup>Required</sup> <a name="TunnelIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.tunnelIps"></a>

```csharp
public string[] TunnelIps { get; }
```

- *Type:* string[]

---

##### `CustomIpsInput`<sup>Optional</sup> <a name="CustomIpsInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIpsInput"></a>

```csharp
public string[] CustomIpsInput { get; }
```

- *Type:* string[]

---

##### `CustomIps`<sup>Required</sup> <a name="CustomIps" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.customIps"></a>

```csharp
public string[] CustomIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference.property.internalValue"></a>

```csharp
public VpnGatewayBgpSettingsInstance1BgpPeeringAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---


### VpnGatewayBgpSettingsOutputReference <a name="VpnGatewayBgpSettingsOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayBgpSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress">PutInstance0BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress">PutInstance1BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance0BgpPeeringAddress">ResetInstance0BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance1BgpPeeringAddress">ResetInstance1BgpPeeringAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstance0BgpPeeringAddress` <a name="PutInstance0BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress"></a>

```csharp
private void PutInstance0BgpPeeringAddress(VpnGatewayBgpSettingsInstance0BgpPeeringAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance0BgpPeeringAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---

##### `PutInstance1BgpPeeringAddress` <a name="PutInstance1BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress"></a>

```csharp
private void PutInstance1BgpPeeringAddress(VpnGatewayBgpSettingsInstance1BgpPeeringAddress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.putInstance1BgpPeeringAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---

##### `ResetInstance0BgpPeeringAddress` <a name="ResetInstance0BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance0BgpPeeringAddress"></a>

```csharp
private void ResetInstance0BgpPeeringAddress()
```

##### `ResetInstance1BgpPeeringAddress` <a name="ResetInstance1BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.resetInstance1BgpPeeringAddress"></a>

```csharp
private void ResetInstance1BgpPeeringAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress">BgpPeeringAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress">Instance0BgpPeeringAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress">Instance1BgpPeeringAddress</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asnInput">AsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddressInput">Instance0BgpPeeringAddressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddressInput">Instance1BgpPeeringAddressInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeightInput">PeerWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeight">PeerWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpPeeringAddress`<sup>Required</sup> <a name="BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.bgpPeeringAddress"></a>

```csharp
public string BgpPeeringAddress { get; }
```

- *Type:* string

---

##### `Instance0BgpPeeringAddress`<sup>Required</sup> <a name="Instance0BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddress"></a>

```csharp
public VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference Instance0BgpPeeringAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance0BgpPeeringAddressOutputReference</a>

---

##### `Instance1BgpPeeringAddress`<sup>Required</sup> <a name="Instance1BgpPeeringAddress" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddress"></a>

```csharp
public VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference Instance1BgpPeeringAddress { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference">VpnGatewayBgpSettingsInstance1BgpPeeringAddressOutputReference</a>

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asnInput"></a>

```csharp
public double AsnInput { get; }
```

- *Type:* double

---

##### `Instance0BgpPeeringAddressInput`<sup>Optional</sup> <a name="Instance0BgpPeeringAddressInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance0BgpPeeringAddressInput"></a>

```csharp
public VpnGatewayBgpSettingsInstance0BgpPeeringAddress Instance0BgpPeeringAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance0BgpPeeringAddress">VpnGatewayBgpSettingsInstance0BgpPeeringAddress</a>

---

##### `Instance1BgpPeeringAddressInput`<sup>Optional</sup> <a name="Instance1BgpPeeringAddressInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.instance1BgpPeeringAddressInput"></a>

```csharp
public VpnGatewayBgpSettingsInstance1BgpPeeringAddress Instance1BgpPeeringAddressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsInstance1BgpPeeringAddress">VpnGatewayBgpSettingsInstance1BgpPeeringAddress</a>

---

##### `PeerWeightInput`<sup>Optional</sup> <a name="PeerWeightInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeightInput"></a>

```csharp
public double PeerWeightInput { get; }
```

- *Type:* double

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `PeerWeight`<sup>Required</sup> <a name="PeerWeight" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.peerWeight"></a>

```csharp
public double PeerWeight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettingsOutputReference.property.internalValue"></a>

```csharp
public VpnGatewayBgpSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayBgpSettings">VpnGatewayBgpSettings</a>

---


### VpnGatewayTimeoutsOutputReference <a name="VpnGatewayTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VpnGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vpnGateway.VpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



