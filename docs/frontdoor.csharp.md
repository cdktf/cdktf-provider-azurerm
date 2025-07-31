# `frontdoor` Submodule <a name="`frontdoor` Submodule" id="@cdktf/provider-azurerm.frontdoor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Frontdoor <a name="Frontdoor" id="@cdktf/provider-azurerm.frontdoor.Frontdoor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor azurerm_frontdoor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new Frontdoor(Construct Scope, string Id, FrontdoorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig">FrontdoorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig">FrontdoorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool">PutBackendPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe">PutBackendPoolHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing">PutBackendPoolLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings">PutBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint">PutFrontendEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule">PutRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings">ResetBackendPoolSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled">ResetLoadBalancerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackendPool` <a name="PutBackendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool"></a>

```csharp
private void PutBackendPool(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPool.parameter.value"></a>

- *Type:* object

---

##### `PutBackendPoolHealthProbe` <a name="PutBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe"></a>

```csharp
private void PutBackendPoolHealthProbe(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolHealthProbe.parameter.value"></a>

- *Type:* object

---

##### `PutBackendPoolLoadBalancing` <a name="PutBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing"></a>

```csharp
private void PutBackendPoolLoadBalancing(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolLoadBalancing.parameter.value"></a>

- *Type:* object

---

##### `PutBackendPoolSettings` <a name="PutBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings"></a>

```csharp
private void PutBackendPoolSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putBackendPoolSettings.parameter.value"></a>

- *Type:* object

---

##### `PutFrontendEndpoint` <a name="PutFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint"></a>

```csharp
private void PutFrontendEndpoint(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putFrontendEndpoint.parameter.value"></a>

- *Type:* object

---

##### `PutRoutingRule` <a name="PutRoutingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule"></a>

```csharp
private void PutRoutingRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putRoutingRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts"></a>

```csharp
private void PutTimeouts(FrontdoorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

---

##### `ResetBackendPoolSettings` <a name="ResetBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetBackendPoolSettings"></a>

```csharp
private void ResetBackendPoolSettings()
```

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoadBalancerEnabled` <a name="ResetLoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetLoadBalancerEnabled"></a>

```csharp
private void ResetLoadBalancerEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Frontdoor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Frontdoor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Frontdoor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Frontdoor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Frontdoor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Frontdoor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Frontdoor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Frontdoor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool">BackendPool</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe">BackendPoolHealthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes">BackendPoolHealthProbes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing">BackendPoolLoadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings">BackendPoolLoadBalancingSettings</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools">BackendPools</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings">BackendPoolSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder">ExplicitResourceOrder</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint">FrontendEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints">FrontendEndpoints</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId">HeaderFrontdoorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule">RoutingRule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules">RoutingRules</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput">BackendPoolHealthProbeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput">BackendPoolInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput">BackendPoolLoadBalancingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput">BackendPoolSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput">FrontendEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput">LoadBalancerEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput">RoutingRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled">LoadBalancerEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackendPool`<sup>Required</sup> <a name="BackendPool" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPool"></a>

```csharp
public FrontdoorBackendPoolList BackendPool { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList">FrontdoorBackendPoolList</a>

---

##### `BackendPoolHealthProbe`<sup>Required</sup> <a name="BackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbe"></a>

```csharp
public FrontdoorBackendPoolHealthProbeList BackendPoolHealthProbe { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList">FrontdoorBackendPoolHealthProbeList</a>

---

##### `BackendPoolHealthProbes`<sup>Required</sup> <a name="BackendPoolHealthProbes" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbes"></a>

```csharp
public StringMap BackendPoolHealthProbes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `BackendPoolLoadBalancing`<sup>Required</sup> <a name="BackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancing"></a>

```csharp
public FrontdoorBackendPoolLoadBalancingList BackendPoolLoadBalancing { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList">FrontdoorBackendPoolLoadBalancingList</a>

---

##### `BackendPoolLoadBalancingSettings`<sup>Required</sup> <a name="BackendPoolLoadBalancingSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingSettings"></a>

```csharp
public StringMap BackendPoolLoadBalancingSettings { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `BackendPools`<sup>Required</sup> <a name="BackendPools" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPools"></a>

```csharp
public StringMap BackendPools { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `BackendPoolSettings`<sup>Required</sup> <a name="BackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettings"></a>

```csharp
public FrontdoorBackendPoolSettingsList BackendPoolSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList">FrontdoorBackendPoolSettingsList</a>

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `ExplicitResourceOrder`<sup>Required</sup> <a name="ExplicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.explicitResourceOrder"></a>

```csharp
public FrontdoorExplicitResourceOrderList ExplicitResourceOrder { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList">FrontdoorExplicitResourceOrderList</a>

---

##### `FrontendEndpoint`<sup>Required</sup> <a name="FrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoint"></a>

```csharp
public FrontdoorFrontendEndpointList FrontendEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList">FrontdoorFrontendEndpointList</a>

---

##### `FrontendEndpoints`<sup>Required</sup> <a name="FrontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpoints"></a>

```csharp
public StringMap FrontendEndpoints { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HeaderFrontdoorId`<sup>Required</sup> <a name="HeaderFrontdoorId" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.headerFrontdoorId"></a>

```csharp
public string HeaderFrontdoorId { get; }
```

- *Type:* string

---

##### `RoutingRule`<sup>Required</sup> <a name="RoutingRule" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRule"></a>

```csharp
public FrontdoorRoutingRuleList RoutingRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList">FrontdoorRoutingRuleList</a>

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRules"></a>

```csharp
public StringMap RoutingRules { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeouts"></a>

```csharp
public FrontdoorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference">FrontdoorTimeoutsOutputReference</a>

---

##### `BackendPoolHealthProbeInput`<sup>Optional</sup> <a name="BackendPoolHealthProbeInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolHealthProbeInput"></a>

```csharp
public object BackendPoolHealthProbeInput { get; }
```

- *Type:* object

---

##### `BackendPoolInput`<sup>Optional</sup> <a name="BackendPoolInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolInput"></a>

```csharp
public object BackendPoolInput { get; }
```

- *Type:* object

---

##### `BackendPoolLoadBalancingInput`<sup>Optional</sup> <a name="BackendPoolLoadBalancingInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolLoadBalancingInput"></a>

```csharp
public object BackendPoolLoadBalancingInput { get; }
```

- *Type:* object

---

##### `BackendPoolSettingsInput`<sup>Optional</sup> <a name="BackendPoolSettingsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.backendPoolSettingsInput"></a>

```csharp
public object BackendPoolSettingsInput { get; }
```

- *Type:* object

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `FrontendEndpointInput`<sup>Optional</sup> <a name="FrontendEndpointInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.frontendEndpointInput"></a>

```csharp
public object FrontendEndpointInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerEnabledInput`<sup>Optional</sup> <a name="LoadBalancerEnabledInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabledInput"></a>

```csharp
public object LoadBalancerEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RoutingRuleInput`<sup>Optional</sup> <a name="RoutingRuleInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.routingRuleInput"></a>

```csharp
public object RoutingRuleInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerEnabled`<sup>Required</sup> <a name="LoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.loadBalancerEnabled"></a>

```csharp
public object LoadBalancerEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.frontdoor.Frontdoor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorBackendPool <a name="FrontdoorBackendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPool {
    object Backend,
    string HealthProbeName,
    string LoadBalancingName,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend">Backend</a></code> | <code>object</code> | backend block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName">HealthProbeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName">LoadBalancingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}. |

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.backend"></a>

```csharp
public object Backend { get; set; }
```

- *Type:* object

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend Frontdoor#backend}

---

##### `HealthProbeName`<sup>Required</sup> <a name="HealthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.healthProbeName"></a>

```csharp
public string HealthProbeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#health_probe_name Frontdoor#health_probe_name}.

---

##### `LoadBalancingName`<sup>Required</sup> <a name="LoadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.loadBalancingName"></a>

```csharp
public string LoadBalancingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#load_balancing_name Frontdoor#load_balancing_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPool.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}.

---

### FrontdoorBackendPoolBackend <a name="FrontdoorBackendPoolBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolBackend {
    string Address,
    string HostHeader,
    double HttpPort,
    double HttpsPort,
    object Enabled = null,
    double Priority = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#address Frontdoor#address}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader">HostHeader</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#host_header Frontdoor#host_header}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort">HttpPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#http_port Frontdoor#http_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort">HttpsPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#https_port Frontdoor#https_port}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#priority Frontdoor#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#weight Frontdoor#weight}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#address Frontdoor#address}.

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.hostHeader"></a>

```csharp
public string HostHeader { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#host_header Frontdoor#host_header}.

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpPort"></a>

```csharp
public double HttpPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#http_port Frontdoor#http_port}.

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.httpsPort"></a>

```csharp
public double HttpsPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#https_port Frontdoor#https_port}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#priority Frontdoor#priority}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackend.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#weight Frontdoor#weight}.

---

### FrontdoorBackendPoolHealthProbe <a name="FrontdoorBackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolHealthProbe {
    string Name,
    object Enabled = null,
    double IntervalInSeconds = null,
    string Path = null,
    string ProbeMethod = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#path Frontdoor#path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod">ProbeMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#protocol Frontdoor#protocol}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `IntervalInSeconds`<sup>Optional</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#interval_in_seconds Frontdoor#interval_in_seconds}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#path Frontdoor#path}.

---

##### `ProbeMethod`<sup>Optional</sup> <a name="ProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.probeMethod"></a>

```csharp
public string ProbeMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#probe_method Frontdoor#probe_method}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbe.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#protocol Frontdoor#protocol}.

---

### FrontdoorBackendPoolLoadBalancing <a name="FrontdoorBackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolLoadBalancing {
    string Name,
    double AdditionalLatencyMilliseconds = null,
    double SampleSize = null,
    double SuccessfulSamplesRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds">AdditionalLatencyMilliseconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize">SampleSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired">SuccessfulSamplesRequired</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `AdditionalLatencyMilliseconds`<sup>Optional</sup> <a name="AdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.additionalLatencyMilliseconds"></a>

```csharp
public double AdditionalLatencyMilliseconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#additional_latency_milliseconds Frontdoor#additional_latency_milliseconds}.

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.sampleSize"></a>

```csharp
public double SampleSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#sample_size Frontdoor#sample_size}.

---

##### `SuccessfulSamplesRequired`<sup>Optional</sup> <a name="SuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancing.property.successfulSamplesRequired"></a>

```csharp
public double SuccessfulSamplesRequired { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#successful_samples_required Frontdoor#successful_samples_required}.

---

### FrontdoorBackendPoolSettings <a name="FrontdoorBackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolSettings {
    object EnforceBackendPoolsCertificateNameCheck,
    double BackendPoolsSendReceiveTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck">EnforceBackendPoolsCertificateNameCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds">BackendPoolsSendReceiveTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}. |

---

##### `EnforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="EnforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.enforceBackendPoolsCertificateNameCheck"></a>

```csharp
public object EnforceBackendPoolsCertificateNameCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enforce_backend_pools_certificate_name_check Frontdoor#enforce_backend_pools_certificate_name_check}.

---

##### `BackendPoolsSendReceiveTimeoutSeconds`<sup>Optional</sup> <a name="BackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettings.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```csharp
public double BackendPoolsSendReceiveTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pools_send_receive_timeout_seconds Frontdoor#backend_pools_send_receive_timeout_seconds}.

---

### FrontdoorConfig <a name="FrontdoorConfig" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object BackendPool,
    object BackendPoolHealthProbe,
    object BackendPoolLoadBalancing,
    object FrontendEndpoint,
    string Name,
    string ResourceGroupName,
    object RoutingRule,
    object BackendPoolSettings = null,
    string FriendlyName = null,
    string Id = null,
    object LoadBalancerEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    FrontdoorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool">BackendPool</a></code> | <code>object</code> | backend_pool block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe">BackendPoolHealthProbe</a></code> | <code>object</code> | backend_pool_health_probe block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing">BackendPoolLoadBalancing</a></code> | <code>object</code> | backend_pool_load_balancing block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint">FrontendEndpoint</a></code> | <code>object</code> | frontend_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule">RoutingRule</a></code> | <code>object</code> | routing_rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings">BackendPoolSettings</a></code> | <code>object</code> | backend_pool_settings block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName">FriendlyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#id Frontdoor#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled">LoadBalancerEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#tags Frontdoor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackendPool`<sup>Required</sup> <a name="BackendPool" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPool"></a>

```csharp
public object BackendPool { get; set; }
```

- *Type:* object

backend_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pool Frontdoor#backend_pool}

---

##### `BackendPoolHealthProbe`<sup>Required</sup> <a name="BackendPoolHealthProbe" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolHealthProbe"></a>

```csharp
public object BackendPoolHealthProbe { get; set; }
```

- *Type:* object

backend_pool_health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pool_health_probe Frontdoor#backend_pool_health_probe}

---

##### `BackendPoolLoadBalancing`<sup>Required</sup> <a name="BackendPoolLoadBalancing" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolLoadBalancing"></a>

```csharp
public object BackendPoolLoadBalancing { get; set; }
```

- *Type:* object

backend_pool_load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pool_load_balancing Frontdoor#backend_pool_load_balancing}

---

##### `FrontendEndpoint`<sup>Required</sup> <a name="FrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.frontendEndpoint"></a>

```csharp
public object FrontendEndpoint { get; set; }
```

- *Type:* object

frontend_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#frontend_endpoint Frontdoor#frontend_endpoint}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#resource_group_name Frontdoor#resource_group_name}.

---

##### `RoutingRule`<sup>Required</sup> <a name="RoutingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.routingRule"></a>

```csharp
public object RoutingRule { get; set; }
```

- *Type:* object

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#routing_rule Frontdoor#routing_rule}

---

##### `BackendPoolSettings`<sup>Optional</sup> <a name="BackendPoolSettings" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.backendPoolSettings"></a>

```csharp
public object BackendPoolSettings { get; set; }
```

- *Type:* object

backend_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pool_settings Frontdoor#backend_pool_settings}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#friendly_name Frontdoor#friendly_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#id Frontdoor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerEnabled`<sup>Optional</sup> <a name="LoadBalancerEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.loadBalancerEnabled"></a>

```csharp
public object LoadBalancerEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#load_balancer_enabled Frontdoor#load_balancer_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#tags Frontdoor#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorConfig.property.timeouts"></a>

```csharp
public FrontdoorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts">FrontdoorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#timeouts Frontdoor#timeouts}

---

### FrontdoorExplicitResourceOrder <a name="FrontdoorExplicitResourceOrder" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorExplicitResourceOrder {

};
```


### FrontdoorFrontendEndpoint <a name="FrontdoorFrontendEndpoint" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorFrontendEndpoint {
    string HostName,
    string Name,
    object SessionAffinityEnabled = null,
    double SessionAffinityTtlSeconds = null,
    string WebApplicationFirewallPolicyLinkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#host_name Frontdoor#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled">SessionAffinityEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds">SessionAffinityTtlSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId">WebApplicationFirewallPolicyLinkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#host_name Frontdoor#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `SessionAffinityEnabled`<sup>Optional</sup> <a name="SessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityEnabled"></a>

```csharp
public object SessionAffinityEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#session_affinity_enabled Frontdoor#session_affinity_enabled}.

---

##### `SessionAffinityTtlSeconds`<sup>Optional</sup> <a name="SessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.sessionAffinityTtlSeconds"></a>

```csharp
public double SessionAffinityTtlSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#session_affinity_ttl_seconds Frontdoor#session_affinity_ttl_seconds}.

---

##### `WebApplicationFirewallPolicyLinkId`<sup>Optional</sup> <a name="WebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpoint.property.webApplicationFirewallPolicyLinkId"></a>

```csharp
public string WebApplicationFirewallPolicyLinkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#web_application_firewall_policy_link_id Frontdoor#web_application_firewall_policy_link_id}.

---

### FrontdoorRoutingRule <a name="FrontdoorRoutingRule" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRoutingRule {
    string[] AcceptedProtocols,
    string[] FrontendEndpoints,
    string Name,
    string[] PatternsToMatch,
    object Enabled = null,
    FrontdoorRoutingRuleForwardingConfiguration ForwardingConfiguration = null,
    FrontdoorRoutingRuleRedirectConfiguration RedirectConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols">AcceptedProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints">FrontendEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch">PatternsToMatch</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enabled Frontdoor#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration">ForwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | forwarding_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration">RedirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | redirect_configuration block. |

---

##### `AcceptedProtocols`<sup>Required</sup> <a name="AcceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.acceptedProtocols"></a>

```csharp
public string[] AcceptedProtocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#accepted_protocols Frontdoor#accepted_protocols}.

---

##### `FrontendEndpoints`<sup>Required</sup> <a name="FrontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.frontendEndpoints"></a>

```csharp
public string[] FrontendEndpoints { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#frontend_endpoints Frontdoor#frontend_endpoints}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#name Frontdoor#name}.

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.patternsToMatch"></a>

```csharp
public string[] PatternsToMatch { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#patterns_to_match Frontdoor#patterns_to_match}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#enabled Frontdoor#enabled}.

---

##### `ForwardingConfiguration`<sup>Optional</sup> <a name="ForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.forwardingConfiguration"></a>

```csharp
public FrontdoorRoutingRuleForwardingConfiguration ForwardingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

forwarding_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#forwarding_configuration Frontdoor#forwarding_configuration}

---

##### `RedirectConfiguration`<sup>Optional</sup> <a name="RedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRule.property.redirectConfiguration"></a>

```csharp
public FrontdoorRoutingRuleRedirectConfiguration RedirectConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

redirect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#redirect_configuration Frontdoor#redirect_configuration}

---

### FrontdoorRoutingRuleForwardingConfiguration <a name="FrontdoorRoutingRuleForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRoutingRuleForwardingConfiguration {
    string BackendPoolName,
    string CacheDuration = null,
    object CacheEnabled = null,
    string[] CacheQueryParameters = null,
    string CacheQueryParameterStripDirective = null,
    object CacheUseDynamicCompression = null,
    string CustomForwardingPath = null,
    string ForwardingProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName">BackendPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration">CacheDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled">CacheEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters">CacheQueryParameters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective">CacheQueryParameterStripDirective</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression">CacheUseDynamicCompression</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath">CustomForwardingPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}. |

---

##### `BackendPoolName`<sup>Required</sup> <a name="BackendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.backendPoolName"></a>

```csharp
public string BackendPoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#backend_pool_name Frontdoor#backend_pool_name}.

---

##### `CacheDuration`<sup>Optional</sup> <a name="CacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheDuration"></a>

```csharp
public string CacheDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_duration Frontdoor#cache_duration}.

---

##### `CacheEnabled`<sup>Optional</sup> <a name="CacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheEnabled"></a>

```csharp
public object CacheEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_enabled Frontdoor#cache_enabled}.

---

##### `CacheQueryParameters`<sup>Optional</sup> <a name="CacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameters"></a>

```csharp
public string[] CacheQueryParameters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_query_parameters Frontdoor#cache_query_parameters}.

---

##### `CacheQueryParameterStripDirective`<sup>Optional</sup> <a name="CacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheQueryParameterStripDirective"></a>

```csharp
public string CacheQueryParameterStripDirective { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_query_parameter_strip_directive Frontdoor#cache_query_parameter_strip_directive}.

---

##### `CacheUseDynamicCompression`<sup>Optional</sup> <a name="CacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.cacheUseDynamicCompression"></a>

```csharp
public object CacheUseDynamicCompression { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#cache_use_dynamic_compression Frontdoor#cache_use_dynamic_compression}.

---

##### `CustomForwardingPath`<sup>Optional</sup> <a name="CustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.customForwardingPath"></a>

```csharp
public string CustomForwardingPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_forwarding_path Frontdoor#custom_forwarding_path}.

---

##### `ForwardingProtocol`<sup>Optional</sup> <a name="ForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration.property.forwardingProtocol"></a>

```csharp
public string ForwardingProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#forwarding_protocol Frontdoor#forwarding_protocol}.

---

### FrontdoorRoutingRuleRedirectConfiguration <a name="FrontdoorRoutingRuleRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRoutingRuleRedirectConfiguration {
    string RedirectProtocol,
    string RedirectType,
    string CustomFragment = null,
    string CustomHost = null,
    string CustomPath = null,
    string CustomQueryString = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol">RedirectProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType">RedirectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment">CustomFragment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost">CustomHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath">CustomPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString">CustomQueryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}. |

---

##### `RedirectProtocol`<sup>Required</sup> <a name="RedirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectProtocol"></a>

```csharp
public string RedirectProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#redirect_protocol Frontdoor#redirect_protocol}.

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.redirectType"></a>

```csharp
public string RedirectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#redirect_type Frontdoor#redirect_type}.

---

##### `CustomFragment`<sup>Optional</sup> <a name="CustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customFragment"></a>

```csharp
public string CustomFragment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_fragment Frontdoor#custom_fragment}.

---

##### `CustomHost`<sup>Optional</sup> <a name="CustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customHost"></a>

```csharp
public string CustomHost { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_host Frontdoor#custom_host}.

---

##### `CustomPath`<sup>Optional</sup> <a name="CustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customPath"></a>

```csharp
public string CustomPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_path Frontdoor#custom_path}.

---

##### `CustomQueryString`<sup>Optional</sup> <a name="CustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration.property.customQueryString"></a>

```csharp
public string CustomQueryString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#custom_query_string Frontdoor#custom_query_string}.

---

### FrontdoorTimeouts <a name="FrontdoorTimeouts" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#create Frontdoor#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#delete Frontdoor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#read Frontdoor#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#update Frontdoor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#create Frontdoor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#delete Frontdoor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#read Frontdoor#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/frontdoor#update Frontdoor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorBackendPoolBackendList <a name="FrontdoorBackendPoolBackendList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolBackendList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get"></a>

```csharp
private FrontdoorBackendPoolBackendOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolBackendOutputReference <a name="FrontdoorBackendPoolBackendOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader">HostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeaderInput"></a>

```csharp
public string HostHeaderInput { get; }
```

- *Type:* string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPortInput"></a>

```csharp
public double HttpPortInput { get; }
```

- *Type:* double

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPortInput"></a>

```csharp
public double HttpsPortInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.hostHeader"></a>

```csharp
public string HostHeader { get; }
```

- *Type:* string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolHealthProbeList <a name="FrontdoorBackendPoolHealthProbeList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolHealthProbeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get"></a>

```csharp
private FrontdoorBackendPoolHealthProbeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolHealthProbeOutputReference <a name="FrontdoorBackendPoolHealthProbeOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolHealthProbeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds">ResetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod">ResetProbeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetIntervalInSeconds` <a name="ResetIntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetIntervalInSeconds"></a>

```csharp
private void ResetIntervalInSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetProbeMethod` <a name="ResetProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProbeMethod"></a>

```csharp
private void ResetProbeMethod()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput">IntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput">ProbeMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod">ProbeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IntervalInSecondsInput`<sup>Optional</sup> <a name="IntervalInSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSecondsInput"></a>

```csharp
public double IntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProbeMethodInput`<sup>Optional</sup> <a name="ProbeMethodInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethodInput"></a>

```csharp
public string ProbeMethodInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.intervalInSeconds"></a>

```csharp
public double IntervalInSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ProbeMethod`<sup>Required</sup> <a name="ProbeMethod" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.probeMethod"></a>

```csharp
public string ProbeMethod { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolHealthProbeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolList <a name="FrontdoorBackendPoolList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get"></a>

```csharp
private FrontdoorBackendPoolOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolLoadBalancingList <a name="FrontdoorBackendPoolLoadBalancingList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolLoadBalancingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get"></a>

```csharp
private FrontdoorBackendPoolLoadBalancingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolLoadBalancingOutputReference <a name="FrontdoorBackendPoolLoadBalancingOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolLoadBalancingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds">ResetAdditionalLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired">ResetSuccessfulSamplesRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalLatencyMilliseconds` <a name="ResetAdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetAdditionalLatencyMilliseconds"></a>

```csharp
private void ResetAdditionalLatencyMilliseconds()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSampleSize"></a>

```csharp
private void ResetSampleSize()
```

##### `ResetSuccessfulSamplesRequired` <a name="ResetSuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.resetSuccessfulSamplesRequired"></a>

```csharp
private void ResetSuccessfulSamplesRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput">AdditionalLatencyMillisecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput">SuccessfulSamplesRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds">AdditionalLatencyMilliseconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize">SampleSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired">SuccessfulSamplesRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AdditionalLatencyMillisecondsInput`<sup>Optional</sup> <a name="AdditionalLatencyMillisecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMillisecondsInput"></a>

```csharp
public double AdditionalLatencyMillisecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSizeInput"></a>

```csharp
public double SampleSizeInput { get; }
```

- *Type:* double

---

##### `SuccessfulSamplesRequiredInput`<sup>Optional</sup> <a name="SuccessfulSamplesRequiredInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequiredInput"></a>

```csharp
public double SuccessfulSamplesRequiredInput { get; }
```

- *Type:* double

---

##### `AdditionalLatencyMilliseconds`<sup>Required</sup> <a name="AdditionalLatencyMilliseconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.additionalLatencyMilliseconds"></a>

```csharp
public double AdditionalLatencyMilliseconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.sampleSize"></a>

```csharp
public double SampleSize { get; }
```

- *Type:* double

---

##### `SuccessfulSamplesRequired`<sup>Required</sup> <a name="SuccessfulSamplesRequired" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```csharp
public double SuccessfulSamplesRequired { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolLoadBalancingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolOutputReference <a name="FrontdoorBackendPoolOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend">PutBackend</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackend` <a name="PutBackend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend"></a>

```csharp
private void PutBackend(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.putBackend.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend">Backend</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput">BackendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput">HealthProbeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput">LoadBalancingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName">HealthProbeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName">LoadBalancingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backend"></a>

```csharp
public FrontdoorBackendPoolBackendList Backend { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolBackendList">FrontdoorBackendPoolBackendList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.backendInput"></a>

```csharp
public object BackendInput { get; }
```

- *Type:* object

---

##### `HealthProbeNameInput`<sup>Optional</sup> <a name="HealthProbeNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeNameInput"></a>

```csharp
public string HealthProbeNameInput { get; }
```

- *Type:* string

---

##### `LoadBalancingNameInput`<sup>Optional</sup> <a name="LoadBalancingNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingNameInput"></a>

```csharp
public string LoadBalancingNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `HealthProbeName`<sup>Required</sup> <a name="HealthProbeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.healthProbeName"></a>

```csharp
public string HealthProbeName { get; }
```

- *Type:* string

---

##### `LoadBalancingName`<sup>Required</sup> <a name="LoadBalancingName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.loadBalancingName"></a>

```csharp
public string LoadBalancingName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolSettingsList <a name="FrontdoorBackendPoolSettingsList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get"></a>

```csharp
private FrontdoorBackendPoolSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorBackendPoolSettingsOutputReference <a name="FrontdoorBackendPoolSettingsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorBackendPoolSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds">ResetBackendPoolsSendReceiveTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendPoolsSendReceiveTimeoutSeconds` <a name="ResetBackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.resetBackendPoolsSendReceiveTimeoutSeconds"></a>

```csharp
private void ResetBackendPoolsSendReceiveTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput">BackendPoolsSendReceiveTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput">EnforceBackendPoolsCertificateNameCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds">BackendPoolsSendReceiveTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck">EnforceBackendPoolsCertificateNameCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPoolsSendReceiveTimeoutSecondsInput`<sup>Optional</sup> <a name="BackendPoolsSendReceiveTimeoutSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSecondsInput"></a>

```csharp
public double BackendPoolsSendReceiveTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `EnforceBackendPoolsCertificateNameCheckInput`<sup>Optional</sup> <a name="EnforceBackendPoolsCertificateNameCheckInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheckInput"></a>

```csharp
public object EnforceBackendPoolsCertificateNameCheckInput { get; }
```

- *Type:* object

---

##### `BackendPoolsSendReceiveTimeoutSeconds`<sup>Required</sup> <a name="BackendPoolsSendReceiveTimeoutSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.backendPoolsSendReceiveTimeoutSeconds"></a>

```csharp
public double BackendPoolsSendReceiveTimeoutSeconds { get; }
```

- *Type:* double

---

##### `EnforceBackendPoolsCertificateNameCheck`<sup>Required</sup> <a name="EnforceBackendPoolsCertificateNameCheck" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.enforceBackendPoolsCertificateNameCheck"></a>

```csharp
public object EnforceBackendPoolsCertificateNameCheck { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorBackendPoolSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorExplicitResourceOrderList <a name="FrontdoorExplicitResourceOrderList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorExplicitResourceOrderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get"></a>

```csharp
private FrontdoorExplicitResourceOrderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FrontdoorExplicitResourceOrderOutputReference <a name="FrontdoorExplicitResourceOrderOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorExplicitResourceOrderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds">BackendPoolHealthProbeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds">BackendPoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds">BackendPoolLoadBalancingIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds">FrontendEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds">RoutingRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPoolHealthProbeIds`<sup>Required</sup> <a name="BackendPoolHealthProbeIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolHealthProbeIds"></a>

```csharp
public string[] BackendPoolHealthProbeIds { get; }
```

- *Type:* string[]

---

##### `BackendPoolIds`<sup>Required</sup> <a name="BackendPoolIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolIds"></a>

```csharp
public string[] BackendPoolIds { get; }
```

- *Type:* string[]

---

##### `BackendPoolLoadBalancingIds`<sup>Required</sup> <a name="BackendPoolLoadBalancingIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.backendPoolLoadBalancingIds"></a>

```csharp
public string[] BackendPoolLoadBalancingIds { get; }
```

- *Type:* string[]

---

##### `FrontendEndpointIds`<sup>Required</sup> <a name="FrontendEndpointIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.frontendEndpointIds"></a>

```csharp
public string[] FrontendEndpointIds { get; }
```

- *Type:* string[]

---

##### `RoutingRuleIds`<sup>Required</sup> <a name="RoutingRuleIds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.routingRuleIds"></a>

```csharp
public string[] RoutingRuleIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrderOutputReference.property.internalValue"></a>

```csharp
public FrontdoorExplicitResourceOrder InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorExplicitResourceOrder">FrontdoorExplicitResourceOrder</a>

---


### FrontdoorFrontendEndpointList <a name="FrontdoorFrontendEndpointList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorFrontendEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get"></a>

```csharp
private FrontdoorFrontendEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorFrontendEndpointOutputReference <a name="FrontdoorFrontendEndpointOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorFrontendEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled">ResetSessionAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds">ResetSessionAffinityTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId">ResetWebApplicationFirewallPolicyLinkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSessionAffinityEnabled` <a name="ResetSessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityEnabled"></a>

```csharp
private void ResetSessionAffinityEnabled()
```

##### `ResetSessionAffinityTtlSeconds` <a name="ResetSessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetSessionAffinityTtlSeconds"></a>

```csharp
private void ResetSessionAffinityTtlSeconds()
```

##### `ResetWebApplicationFirewallPolicyLinkId` <a name="ResetWebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.resetWebApplicationFirewallPolicyLinkId"></a>

```csharp
private void ResetWebApplicationFirewallPolicyLinkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput">SessionAffinityEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput">SessionAffinityTtlSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput">WebApplicationFirewallPolicyLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled">SessionAffinityEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds">SessionAffinityTtlSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId">WebApplicationFirewallPolicyLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SessionAffinityEnabledInput`<sup>Optional</sup> <a name="SessionAffinityEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabledInput"></a>

```csharp
public object SessionAffinityEnabledInput { get; }
```

- *Type:* object

---

##### `SessionAffinityTtlSecondsInput`<sup>Optional</sup> <a name="SessionAffinityTtlSecondsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSecondsInput"></a>

```csharp
public double SessionAffinityTtlSecondsInput { get; }
```

- *Type:* double

---

##### `WebApplicationFirewallPolicyLinkIdInput`<sup>Optional</sup> <a name="WebApplicationFirewallPolicyLinkIdInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkIdInput"></a>

```csharp
public string WebApplicationFirewallPolicyLinkIdInput { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SessionAffinityEnabled`<sup>Required</sup> <a name="SessionAffinityEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityEnabled"></a>

```csharp
public object SessionAffinityEnabled { get; }
```

- *Type:* object

---

##### `SessionAffinityTtlSeconds`<sup>Required</sup> <a name="SessionAffinityTtlSeconds" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.sessionAffinityTtlSeconds"></a>

```csharp
public double SessionAffinityTtlSeconds { get; }
```

- *Type:* double

---

##### `WebApplicationFirewallPolicyLinkId`<sup>Required</sup> <a name="WebApplicationFirewallPolicyLinkId" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.webApplicationFirewallPolicyLinkId"></a>

```csharp
public string WebApplicationFirewallPolicyLinkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorFrontendEndpointOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRoutingRuleForwardingConfigurationOutputReference <a name="FrontdoorRoutingRuleForwardingConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRoutingRuleForwardingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration">ResetCacheDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled">ResetCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters">ResetCacheQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective">ResetCacheQueryParameterStripDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression">ResetCacheUseDynamicCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath">ResetCustomForwardingPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol">ResetForwardingProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheDuration` <a name="ResetCacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheDuration"></a>

```csharp
private void ResetCacheDuration()
```

##### `ResetCacheEnabled` <a name="ResetCacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheEnabled"></a>

```csharp
private void ResetCacheEnabled()
```

##### `ResetCacheQueryParameters` <a name="ResetCacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameters"></a>

```csharp
private void ResetCacheQueryParameters()
```

##### `ResetCacheQueryParameterStripDirective` <a name="ResetCacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheQueryParameterStripDirective"></a>

```csharp
private void ResetCacheQueryParameterStripDirective()
```

##### `ResetCacheUseDynamicCompression` <a name="ResetCacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCacheUseDynamicCompression"></a>

```csharp
private void ResetCacheUseDynamicCompression()
```

##### `ResetCustomForwardingPath` <a name="ResetCustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetCustomForwardingPath"></a>

```csharp
private void ResetCustomForwardingPath()
```

##### `ResetForwardingProtocol` <a name="ResetForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.resetForwardingProtocol"></a>

```csharp
private void ResetForwardingProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput">BackendPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput">CacheDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput">CacheEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput">CacheQueryParametersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput">CacheQueryParameterStripDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput">CacheUseDynamicCompressionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput">CustomForwardingPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput">ForwardingProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName">BackendPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration">CacheDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled">CacheEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters">CacheQueryParameters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective">CacheQueryParameterStripDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression">CacheUseDynamicCompression</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath">CustomForwardingPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendPoolNameInput`<sup>Optional</sup> <a name="BackendPoolNameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolNameInput"></a>

```csharp
public string BackendPoolNameInput { get; }
```

- *Type:* string

---

##### `CacheDurationInput`<sup>Optional</sup> <a name="CacheDurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDurationInput"></a>

```csharp
public string CacheDurationInput { get; }
```

- *Type:* string

---

##### `CacheEnabledInput`<sup>Optional</sup> <a name="CacheEnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabledInput"></a>

```csharp
public object CacheEnabledInput { get; }
```

- *Type:* object

---

##### `CacheQueryParametersInput`<sup>Optional</sup> <a name="CacheQueryParametersInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParametersInput"></a>

```csharp
public string[] CacheQueryParametersInput { get; }
```

- *Type:* string[]

---

##### `CacheQueryParameterStripDirectiveInput`<sup>Optional</sup> <a name="CacheQueryParameterStripDirectiveInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirectiveInput"></a>

```csharp
public string CacheQueryParameterStripDirectiveInput { get; }
```

- *Type:* string

---

##### `CacheUseDynamicCompressionInput`<sup>Optional</sup> <a name="CacheUseDynamicCompressionInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompressionInput"></a>

```csharp
public object CacheUseDynamicCompressionInput { get; }
```

- *Type:* object

---

##### `CustomForwardingPathInput`<sup>Optional</sup> <a name="CustomForwardingPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPathInput"></a>

```csharp
public string CustomForwardingPathInput { get; }
```

- *Type:* string

---

##### `ForwardingProtocolInput`<sup>Optional</sup> <a name="ForwardingProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocolInput"></a>

```csharp
public string ForwardingProtocolInput { get; }
```

- *Type:* string

---

##### `BackendPoolName`<sup>Required</sup> <a name="BackendPoolName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.backendPoolName"></a>

```csharp
public string BackendPoolName { get; }
```

- *Type:* string

---

##### `CacheDuration`<sup>Required</sup> <a name="CacheDuration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheDuration"></a>

```csharp
public string CacheDuration { get; }
```

- *Type:* string

---

##### `CacheEnabled`<sup>Required</sup> <a name="CacheEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheEnabled"></a>

```csharp
public object CacheEnabled { get; }
```

- *Type:* object

---

##### `CacheQueryParameters`<sup>Required</sup> <a name="CacheQueryParameters" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameters"></a>

```csharp
public string[] CacheQueryParameters { get; }
```

- *Type:* string[]

---

##### `CacheQueryParameterStripDirective`<sup>Required</sup> <a name="CacheQueryParameterStripDirective" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheQueryParameterStripDirective"></a>

```csharp
public string CacheQueryParameterStripDirective { get; }
```

- *Type:* string

---

##### `CacheUseDynamicCompression`<sup>Required</sup> <a name="CacheUseDynamicCompression" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.cacheUseDynamicCompression"></a>

```csharp
public object CacheUseDynamicCompression { get; }
```

- *Type:* object

---

##### `CustomForwardingPath`<sup>Required</sup> <a name="CustomForwardingPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.customForwardingPath"></a>

```csharp
public string CustomForwardingPath { get; }
```

- *Type:* string

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.forwardingProtocol"></a>

```csharp
public string ForwardingProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference.property.internalValue"></a>

```csharp
public FrontdoorRoutingRuleForwardingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---


### FrontdoorRoutingRuleList <a name="FrontdoorRoutingRuleList" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRoutingRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get"></a>

```csharp
private FrontdoorRoutingRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRoutingRuleOutputReference <a name="FrontdoorRoutingRuleOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRoutingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration">PutForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration">PutRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration">ResetForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration">ResetRedirectConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardingConfiguration` <a name="PutForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration"></a>

```csharp
private void PutForwardingConfiguration(FrontdoorRoutingRuleForwardingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putForwardingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `PutRedirectConfiguration` <a name="PutRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration"></a>

```csharp
private void PutRedirectConfiguration(FrontdoorRoutingRuleRedirectConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.putRedirectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetForwardingConfiguration` <a name="ResetForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetForwardingConfiguration"></a>

```csharp
private void ResetForwardingConfiguration()
```

##### `ResetRedirectConfiguration` <a name="ResetRedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.resetRedirectConfiguration"></a>

```csharp
private void ResetRedirectConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration">ForwardingConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration">RedirectConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput">AcceptedProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput">ForwardingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput">FrontendEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput">PatternsToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput">RedirectConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols">AcceptedProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints">FrontendEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch">PatternsToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardingConfiguration`<sup>Required</sup> <a name="ForwardingConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfiguration"></a>

```csharp
public FrontdoorRoutingRuleForwardingConfigurationOutputReference ForwardingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfigurationOutputReference">FrontdoorRoutingRuleForwardingConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RedirectConfiguration`<sup>Required</sup> <a name="RedirectConfiguration" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfiguration"></a>

```csharp
public FrontdoorRoutingRuleRedirectConfigurationOutputReference RedirectConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference">FrontdoorRoutingRuleRedirectConfigurationOutputReference</a>

---

##### `AcceptedProtocolsInput`<sup>Optional</sup> <a name="AcceptedProtocolsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocolsInput"></a>

```csharp
public string[] AcceptedProtocolsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ForwardingConfigurationInput`<sup>Optional</sup> <a name="ForwardingConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.forwardingConfigurationInput"></a>

```csharp
public FrontdoorRoutingRuleForwardingConfiguration ForwardingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleForwardingConfiguration">FrontdoorRoutingRuleForwardingConfiguration</a>

---

##### `FrontendEndpointsInput`<sup>Optional</sup> <a name="FrontendEndpointsInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpointsInput"></a>

```csharp
public string[] FrontendEndpointsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatternsToMatchInput`<sup>Optional</sup> <a name="PatternsToMatchInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatchInput"></a>

```csharp
public string[] PatternsToMatchInput { get; }
```

- *Type:* string[]

---

##### `RedirectConfigurationInput`<sup>Optional</sup> <a name="RedirectConfigurationInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.redirectConfigurationInput"></a>

```csharp
public FrontdoorRoutingRuleRedirectConfiguration RedirectConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---

##### `AcceptedProtocols`<sup>Required</sup> <a name="AcceptedProtocols" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.acceptedProtocols"></a>

```csharp
public string[] AcceptedProtocols { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FrontendEndpoints`<sup>Required</sup> <a name="FrontendEndpoints" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.frontendEndpoints"></a>

```csharp
public string[] FrontendEndpoints { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.patternsToMatch"></a>

```csharp
public string[] PatternsToMatch { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FrontdoorRoutingRuleRedirectConfigurationOutputReference <a name="FrontdoorRoutingRuleRedirectConfigurationOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorRoutingRuleRedirectConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment">ResetCustomFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost">ResetCustomHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath">ResetCustomPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString">ResetCustomQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomFragment` <a name="ResetCustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomFragment"></a>

```csharp
private void ResetCustomFragment()
```

##### `ResetCustomHost` <a name="ResetCustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomHost"></a>

```csharp
private void ResetCustomHost()
```

##### `ResetCustomPath` <a name="ResetCustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomPath"></a>

```csharp
private void ResetCustomPath()
```

##### `ResetCustomQueryString` <a name="ResetCustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.resetCustomQueryString"></a>

```csharp
private void ResetCustomQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput">CustomFragmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput">CustomHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput">CustomPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput">CustomQueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput">RedirectProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput">RedirectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment">CustomFragment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost">CustomHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath">CustomPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString">CustomQueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol">RedirectProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType">RedirectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomFragmentInput`<sup>Optional</sup> <a name="CustomFragmentInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragmentInput"></a>

```csharp
public string CustomFragmentInput { get; }
```

- *Type:* string

---

##### `CustomHostInput`<sup>Optional</sup> <a name="CustomHostInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHostInput"></a>

```csharp
public string CustomHostInput { get; }
```

- *Type:* string

---

##### `CustomPathInput`<sup>Optional</sup> <a name="CustomPathInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPathInput"></a>

```csharp
public string CustomPathInput { get; }
```

- *Type:* string

---

##### `CustomQueryStringInput`<sup>Optional</sup> <a name="CustomQueryStringInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryStringInput"></a>

```csharp
public string CustomQueryStringInput { get; }
```

- *Type:* string

---

##### `RedirectProtocolInput`<sup>Optional</sup> <a name="RedirectProtocolInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocolInput"></a>

```csharp
public string RedirectProtocolInput { get; }
```

- *Type:* string

---

##### `RedirectTypeInput`<sup>Optional</sup> <a name="RedirectTypeInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectTypeInput"></a>

```csharp
public string RedirectTypeInput { get; }
```

- *Type:* string

---

##### `CustomFragment`<sup>Required</sup> <a name="CustomFragment" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customFragment"></a>

```csharp
public string CustomFragment { get; }
```

- *Type:* string

---

##### `CustomHost`<sup>Required</sup> <a name="CustomHost" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customHost"></a>

```csharp
public string CustomHost { get; }
```

- *Type:* string

---

##### `CustomPath`<sup>Required</sup> <a name="CustomPath" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customPath"></a>

```csharp
public string CustomPath { get; }
```

- *Type:* string

---

##### `CustomQueryString`<sup>Required</sup> <a name="CustomQueryString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.customQueryString"></a>

```csharp
public string CustomQueryString { get; }
```

- *Type:* string

---

##### `RedirectProtocol`<sup>Required</sup> <a name="RedirectProtocol" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectProtocol"></a>

```csharp
public string RedirectProtocol { get; }
```

- *Type:* string

---

##### `RedirectType`<sup>Required</sup> <a name="RedirectType" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.redirectType"></a>

```csharp
public string RedirectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfigurationOutputReference.property.internalValue"></a>

```csharp
public FrontdoorRoutingRuleRedirectConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorRoutingRuleRedirectConfiguration">FrontdoorRoutingRuleRedirectConfiguration</a>

---


### FrontdoorTimeoutsOutputReference <a name="FrontdoorTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FrontdoorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoor.FrontdoorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



